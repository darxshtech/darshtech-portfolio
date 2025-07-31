// This file helps TypeScript understand our module paths
declare module '@/lib/auth-config' {
  import { NextAuthOptions } from 'next-auth';
  export const authConfig: NextAuthOptions;
}

declare module '@/lib/db' {
  import { Mongoose } from 'mongoose';
  declare function dbConnect(): Promise<Mongoose>;
  export default dbConnect;
}

// Add any other module declarations as needed
