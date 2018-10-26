export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  fullname: string;
  about: string;
  email: string;
  password?: string;
  last_login: number;
  // status: enum;
  createdAt: number;
  updatedAt: number;
}
