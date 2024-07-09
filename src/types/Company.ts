import { DBDocument } from "./DBDocument";
import { PublisherRole } from "./PublisherRole";

type MembersMap = Record<
  string,
  {
    id: string;
    role: PublisherRole;
  }
>;


export type Company = DBDocument & {
  avatar?: string;
  companyDocument?: string;
  companyName?: string;
  coverImage?: string;
  description?: string;
  members: MembersMap;
  status: 'pending' | 'active';
  tradingName?: string;
};
