export type SignUpRequest = {
  name: string;
  email: string;
  password: string;
};

export type SignUpResponse = APIResponse<{
  id: string;
  email: string;
}>;

export type GetUserInfoResponse = APIResponse<{
  id: string;
  name: string;
  email: string;
  avatar?: string;
  companies?: {
    id: string;
    name: string;
    role: string;
  }[];
}>;
