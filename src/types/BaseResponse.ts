export type BaseResponse = {
  status: "success" | "error";
  message?: string;
  data?: any;
};