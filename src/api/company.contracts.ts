import { CompanyEntity } from '@/database-entity/company.entity';

export type GetCompanyRequest = {
  id: string;
};

export type GetCompanyResponse = {
  success: boolean;
  data: CompanyEntity;
};
