import { Company } from '../dto/Company';

export type GetCompanyRequest = {
  id: string;
};

export type GetCompanyResponse = {
  success: boolean;
  data: Company;
};
