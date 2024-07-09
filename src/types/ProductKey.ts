import { DBDocument } from "./DBDocument";

export type ProductKey = DBDocument & {
  keys: {
    key: string;
    status: 'available' | 'sold';
  }[];
  productId: string;
};
