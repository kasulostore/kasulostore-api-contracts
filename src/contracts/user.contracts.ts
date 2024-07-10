import { User } from '../dto/User';

export type GetUserRequest = {
  id: string;
};

export type GetUserResponse = {
  success: boolean;
  data: User;
}
