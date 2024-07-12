export type ErrorResponse = {
  success: false;
  error: string;
};

export type PaginatedData<T> = {
  offset: number;
  limit: number;
  total: number;
  items: T[];
};

export type SuccessResponse = {
  success: true;
};
