import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/writing/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // Catch any request to a protected route
      const isOnProtectedPage = nextUrl.pathname.startsWith('/writing/admin');
      if (isOnProtectedPage) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      return true;
    },
  },
  providers: [], // Providers will be added in auth.ts since some rely on node.js APIs not available in proxy.ts
} satisfies NextAuthConfig;