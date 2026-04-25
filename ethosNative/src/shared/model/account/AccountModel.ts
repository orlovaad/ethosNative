export interface IAccountModel {
  id: number;
  userId: number;
  email: string;
  phone: string;
  firstName: string;
  orgId: number | null;
  middleName: string;
  lastName: string;
  avatar: string | null;
  externalId: string | null;
  accessToken: string;
}
