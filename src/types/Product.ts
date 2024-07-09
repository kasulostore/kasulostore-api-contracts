import { DBDocument } from "./DBDocument";

export type ProductStatus = 'draft' | 'in-review' | 'published' | 'reproved'; 

export type Product = DBDocument & {
  avatar?: string;
  companyId: string;
  coverImage?: string;
  description: string;
  isAvailable: boolean;
  name: string;
  pictures?: string[];
  price: number;
  releaseDate: string;
  status: ProductStatus;
};
