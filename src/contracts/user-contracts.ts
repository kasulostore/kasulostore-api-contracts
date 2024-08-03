export type SignUpRequest = {
  name: string;
  email: string;
  password: string;
};

export type SignUpResponse = {
  success: true;
  data: {
    id: string;
    email: string;
  };
};

export type GetUserInfoResponse = {
  success: true;
  data: {
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
};
