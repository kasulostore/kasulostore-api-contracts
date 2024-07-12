import { PaginatedData } from '@/types/api-types';
import { DetailedProduct, LibraryItem, Product } from '@/types/dto';

export type GetStoreCatalogRequest = {
  offset?: number;
  limit?: number;
};

export type GetStoreCatalogResponse = {
  success: true;
  data: {
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
  };
};

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

export type GetStoreCartResponse = {
  success: true;
  data: {
    totalPrice: number;
    items: Product[];
  };
};

export type GetProductKeyRequest = {
  productId: string;
};

export type GetProductKeyResponse = {
  success: true;
  data: {
    key: string;
  };
};
