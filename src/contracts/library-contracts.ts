export type GetStoreLibraryRequest = {
  userId: string;
  offset?: number;
  limit?: number;
};

export type GetStoreLibraryResponse = {
  success: true;
  data: {
    items: {
      id: string;
      name: string;
    }[];
    total: number;
    offset: number;
    limit: number;
  };
};
