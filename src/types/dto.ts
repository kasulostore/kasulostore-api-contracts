export type Company = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  company: {
    id: Company['id'];
    name: Company['name'];
  };
};

export type DetailedProduct = Product & {
  description: string;
  stock: number;
};

export type LibraryItem = Product & {
  purchaseDate: Date;
};
