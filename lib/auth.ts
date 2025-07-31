import { getServerSession } from 'next-auth/next';
import { authConfig } from '@/lib/auth-config';

export interface SessionUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  isAdmin?: boolean;
}

export interface Session {
  user: SessionUser;
}

export async function requireAdmin() {
  const session = await getServerSession(authConfig as any) as unknown as (Session | null);
  
  if (!session?.user?.isAdmin) {
    throw new Error('Unauthorized');
  }
  
  return { session };
}

export async function getCurrentUser(): Promise<SessionUser | null> {
  const session = await getServerSession(authConfig as any) as unknown as (Session | null);
  return session?.user || null;
}
