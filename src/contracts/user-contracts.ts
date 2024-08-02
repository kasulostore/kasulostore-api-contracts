export type SignUpRequest = {
  name: string;
  email: string;
  password: string;
};

export type SignUpResponse = {
  id: string;
  email: string;
};

export type GetUserInfoResponse = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  companies?: {
    id: string;
    name: string;
    role: string;
  }[];
};
