import { ProductKeyStatus } from "@/dto/ProductKeyStatus";
import { Entity } from "./base.entity";

export type ProductKeyEntity = Entity & {
  keys: {
    key: string;
    status: ProductKeyStatus;
  }[];
  productId: string;
};