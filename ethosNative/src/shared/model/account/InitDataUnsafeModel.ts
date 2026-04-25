import type { IUser } from './UserModel';

export interface IInitDataUnsafe {
  auth_date: string;
  chat_instance: string;
  chat_type: string;
  hash: string;
  signature: string;
  user: IUser;
}
