import { ProductStatus } from "@/dto/ProductStatus";
import { Entity } from "./base.entity";

export type ProductEntity = Entity & {
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
