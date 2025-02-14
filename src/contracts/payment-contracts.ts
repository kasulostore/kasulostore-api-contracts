export type CheckoutRequest = {
  userId: string;
  success_url: string;
  cancel_url: string;
};

export type CheckoutResponse = {
  success: true;
  data: {
    redirectUrl: string;
  };
};
