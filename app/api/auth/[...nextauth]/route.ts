import NextAuth from 'next-auth/next';
import { authConfig } from '@/lib/auth-config';

// Export the handler with the configuration
const handler = NextAuth(authConfig as any);

export { handler as GET, handler as POST };
