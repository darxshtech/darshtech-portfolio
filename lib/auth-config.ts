import GitHubProvider from 'next-auth/providers/github';

export const authConfig = {
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    // Add other providers as needed
  ],
  // Custom pages
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
  // Session configuration
  session: {
    strategy: 'jwt',
  },
  // Callbacks for JWT and Session
  callbacks: {
    async jwt({ token, user, account }: { token: any; user?: any; account?: any }) {
      // Initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token as string | undefined,
          refreshToken: account.refresh_token as string | undefined,
        };
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      // Send properties to the client
      if (session.user) {
        session.user.id = token.sub || '';
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  // Enable debug mode in development
  debug: process.env.NODE_ENV === 'development',
  // Secret for JWT encryption
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key',
};
