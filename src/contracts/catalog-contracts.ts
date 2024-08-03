export type GetStoreCatalogRequest = {
  offset?: number;
  limit?: number;
};

export type GetStoreCatalogResponse = APIResponse<{
  items: {
    id: string;
    stock: number;
    name: string;
    price: number;
    releaseDate: number;
    company: {
      id: string;
      name: string;
    };
  }[];
  total: number;
  offset: number;
  limit: number;
}>;
