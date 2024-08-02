export type GetStoreShoppingCartRequest = {
  userId: string;
};

export type GetStoreShoppingCartResponse = {
  totalPrice: number;
  items: {
    id: string;
    name: string;
    price: number;
  }[];
};

export type PostClearCartRequest = {
  userId: string;
};

export type PostClearCartRessponse = {
  success: true;
};
