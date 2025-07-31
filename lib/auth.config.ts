// Simple auth configuration for the portfolio site
export const authConfig = {
  providers: [],
  pages: {
    signIn: '/',
    error: '/',
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key',
  callbacks: {
    async session({ session, token }: any) {
      if (session?.user) {
        session.user.id = token.sub || '';
        session.user.isAdmin = token.isAdmin || false;
      }
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin || false;
      }
      return token;
    },
  },
};
