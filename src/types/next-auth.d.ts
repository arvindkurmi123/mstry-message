import "next-auth";

declare module "next-auth" {
  interface User {
    _id?: string;
    isAcceptingMessage?: boolean;
    isVerified?: boolean;
    username?: string;
  }
  interface Session {
    user: {
      _id?: string;
      isVerified?: boolean;
      isAcceptingMessage?: boolean;
      username?: string
    } & DafaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    _id?: string;
    isVerified?: boolean;
    isAcceptingMessage?: boolean;
    username?: string;
  }
}
