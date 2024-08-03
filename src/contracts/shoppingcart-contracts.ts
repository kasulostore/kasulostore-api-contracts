export type GetStoreShoppingCartRequest = {
  userId: string;
};

export type GetStoreShoppingCartResponse = {
  success: true;
  data: {
    totalPrice: number;
    items: {
      id: string;
      name: string;
      price: number;
    }[];
  };
};

export type PostClearCartRequest = {
  userId: string;
};

export type PostClearCartRessponse = {
  success: true;
  data: {
    success: true;
  };
};
