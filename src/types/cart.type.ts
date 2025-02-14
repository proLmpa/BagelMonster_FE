import type { Product } from "./product.type";

export interface CartPostRequest {
  storeId: number;
  productId: number;
  quantity: number;
}

export type StoreStatus = "NEWORDER" | "READ" | "SOLD" | "CANCELED";

export type ProductGetResponse = Pick<Product, "productId" | "name" | "productPictureUrl" | "price"> & {
  quantity: number;
};

export interface CartGetResponse {
  cartId: number;
  storeId: number;
  storeName: string;
  address: string;
  phone: string;
  products: ProductGetResponse[];
  totalPrice: number;
  storeStatus: StoreStatus;
  createdDate: string;
  modifiedDate: string;
}

export interface CartGetApi {
  cartId: number;
  storeName: string;
  products: CartProduct[];
  totalPrice: number;
  request: string;
  createdDate: string;
  modifiedDate: string;
}

export interface CartProduct {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  productPictureUrl: string;
}

export interface OrderGetApi {
  orderId: number;
  storeName: string;
  products: CartProduct[];
  totalPrice: number;
  storeStatus: StoreStatus;
  createdDate: string;
  modifiedDate: string;
}
