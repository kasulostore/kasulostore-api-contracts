export type LibraryItem = {
  productId: string;
  productKey: string;
  productName: string;
  purchaseDate: string;
};

export type Library = {
  id: string;
  items: {
    productId: string;
    productKey: string;
    purchaseDate: string;
  }[];
  userId: string;
};
