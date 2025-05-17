export interface IUser {
  id: string;
  email: string;
  role: "USER" | "ADMIN";
  isPremiumUser: boolean;
  iat?: number;
  exp?: number;
}
