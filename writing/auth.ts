// Bcrypt must be executed here because it relies on node.js APIs not available in proxy.ts
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { getUser } from './lib/api';
import bcrypt from 'bcrypt';
import { Logger } from '@/lib/logger';

const logger = new Logger('Auth');

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials, request) {
        // Validate basic input format before hitting the DB
        const parseCredentials = z.object({
          username: z.string().min(3),
          password: z.string().min(6),
        }).safeParse(credentials);

        if (!parseCredentials.success) {
          // bad input
          logger.log('Invalid credentials format: ', parseCredentials.error);
          return null;
        }
        
        // https://nextjs.org/learn/dashboard-app/adding-authentication
        const user = await getUser(parseCredentials.data.username);
        if (!user || !user.encrypted_password) {
          // No user found
          logger.log('User not found for ' + parseCredentials.data.username + ' or no encrypted password');
          return null;
        }

        const passwordMatch = await bcrypt.compare(parseCredentials.data.password, user.encrypted_password);
        if (passwordMatch) {
          // Success
          logger.log('Authentication successful for user: ' + parseCredentials.data.username);
          return user;
        }
        
        // Password mismatch or any other failure
        logger.log('Password mismatch for user: ' + parseCredentials.data.username);
        return null;
      },
    }),
  ],
});