export type GetStoreProductDetailsRequest = {
  productId: string;
  userId?: string;
};

export type GetStoreProductDetailsResponse = {
  success: true;
  data: {
    id: string;
    name: string;
    price: number;
    description: string;
    haveStock: boolean;
    purchased: boolean;
    company: {
      id: string;
      name: string;
    };
  };
};

export type GetStoreProductKeyRequest = {
  productId: string;
};

export type GetStoreProductKeyResponse = {
  success: true;
  data: {
    key: string;
  };
};

export type CreateProductRequest = {
  companyId: string;
  profilePictureWide?: string;
  profilePictureTall?: string;
  description: string;
  isAvailable: boolean;
  name: string;
  pictures?: string[];
  price: number;
  releaseDate: number;
  status: 'draft' | 'in-review' | 'published' | 'reproved';
};

export type CreateProductResponse = {
  success: true;
  data: {
    id: string;
  };
};

export type UpdateProductRequest = Partial<CreateProductRequest> & {
  id: string;
};

export type UpdateProductResponse = {
  success: true;
  data: {
    id: string;
  };
};
