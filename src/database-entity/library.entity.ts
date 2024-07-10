import { Entity } from "./base.entity";

export type LibraryEntity = Entity & {
  id: string;
  items: {
    productId: string;
    productKey: string;
    purchaseDate: string;
  }[];
  userId: string;
};
