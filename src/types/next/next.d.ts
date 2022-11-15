// Custom user type.
export interface UserType {
  id: string;
  isAdminUser: boolean;
  isImpersonatedUser: boolean;
}

// Module augmentation for next/auth User and Session.
declare module 'next-auth' {
  interface User extends UserType {}

  interface Session {
    user: UserType;
  }
}

// Module augmentation for next/auth JWT.
declare module 'next-auth/jwt' {
  interface JWT {
    user: UserType;
  }
}
