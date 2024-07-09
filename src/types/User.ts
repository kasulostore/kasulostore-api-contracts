import { DBDocument } from "./DBDocument";

export type User = DBDocument & {
  avatar?: string;
  email: string;
  name: string;
};
