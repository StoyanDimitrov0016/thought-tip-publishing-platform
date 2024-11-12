import { IAuthUser } from "./IAuthUser";

interface IAuthBaseApiResponse {
  status: number;
  success: boolean;
  timestamp: string;
  type: string;
  title: string;
  detail: string;
  instance: string;
}

export interface IRegistrationApiResponse extends IAuthBaseApiResponse {
  data: {
    user: IAuthUser;
  };
}

export interface ILoginApiResponse extends IAuthBaseApiResponse {
  data: {
    user: IAuthUser;
  };
}
