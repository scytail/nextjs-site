import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// Added this to the root of the app directory to handle authentication for all routes except API routes and static assets
// This way, we can protect pages they even begin to load and only allow access to the login page for unauthenticated users.
export default NextAuth(authConfig).auth;

// Validate on any protected route
export const config = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
  matcher: ['/(writing/admin.*)'],
};