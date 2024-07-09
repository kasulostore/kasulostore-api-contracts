import { User } from "@/types/User";

export type GetUserRequest = {
  id: string;
};

export type GetUserResponse = {
  success: boolean;
  data: User
}

export type GetUserListRequest = {
  ids: string[];
};

export type GetUserListResponse = {
  success: boolean;
  data: User[]
}
