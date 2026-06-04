// Bcrypt must be executed here because it relies on node.js APIs not available in proxy.ts
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

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
          return null;
        }

        // TODO: hit the DB to validate the user
        // https://nextjs.org/learn/dashboard-app/adding-authentication
        if (credentials?.username === 'test' && credentials?.password === '123123') {
          const user = { id: '1', name: 'J Smith', email: 'test@example.com' };
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // Return null to display a generic error.
          return null;
        }
      },
    }),
  ],
});