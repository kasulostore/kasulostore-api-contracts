import { PublisherRole } from "./PublisherRole";

export type MembersMap = Record<
  string,
  {
    id: string;
    role: PublisherRole;
  }
>;
