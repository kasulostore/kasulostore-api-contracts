import { MembersMap } from "@/dto/MembersMap";
import { Entity } from "./base.entity";
import { CompanyStatus } from "@/dto/CompanyStatus";

export type CompanyEntity = Entity & {
  avatar?: string;
  companyDocument?: string;
  companyName?: string;
  coverImage?: string;
  description?: string;
  members: MembersMap;
  status: CompanyStatus;
  tradingName?: string;
};
