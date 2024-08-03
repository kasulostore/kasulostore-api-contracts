export type GetStoreShoppingCartRequest = {
  userId: string;
};

export type GetStoreShoppingCartResponse = APIResponse<{
  totalPrice: number;
  items: {
    id: string;
    name: string;
    price: number;
  }[];
}>;

export type PostClearCartRequest = {
  userId: string;
};

export type PostClearCartRessponse = APIResponse<{
  success: true;
}>;
