import { UserEntity } from "@/database-entity/user.entity";

export type GetUserRequest = {
  id: string;
};

export type GetUserResponse = {
  success: boolean;
  data: UserEntity;
}

export type GetUserListRequest = {
  ids: string[];
};

export type GetUserListResponse = {
  success: boolean;
  data: UserEntity[];
}
