import type { AddOrModifyProductApi, Product, ProductApi } from "@/types/product.type";

import { API_URL } from ".";

export async function getProduct(storeId: string, productId: string) {
  const response = await fetch(`${API_URL}/api/stores/${storeId}/products/${productId}`, {
    method: "GET",
  });

  const data = await response.json();

  if (!response.ok) {
    alert(data.statusMessage);
  }

  return data as Product;
}

export async function addCart(request: ProductApi) {
  const { storeId, productId, quantity, token } = request;
  if (!token) throw new Error("로그인이 필요합니다.");

  const reqBody = { storeId, productId, quantity };
  const response = await fetch(`${API_URL}/api/carts`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify(reqBody),
  });

  const data = await response.json();

  if (!response.ok) {
    alert(data.statusMessage);
  }
}

export async function addProduct(req: AddOrModifyProductApi, storeId: string, token: string | undefined) {
  if (!token) throw new Error("로그인이 필요합니다.");

  const reqUrl = `${API_URL}/api/stores/${storeId}/products`;
  const formData = new FormData();

  if (req.picture !== null) formData.append("picture", req.picture);
  formData.append("requestDto", new Blob([JSON.stringify(req.requestDto)], { type: "application/json" }));

  const response = await fetch(reqUrl, {
    method: "POST",
    headers: { Authorization: token },
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    alert(data.statusMessage);
  }
}

export async function modifyProduct(
  req: AddOrModifyProductApi,
  storeId: string,
  productId: string,
  token: string | undefined,
) {
  if (!token) throw new Error("로그인이 필요합니다.");

  const reqUrl = `${API_URL}/api/stores/${storeId}/products/${productId}`;
  const Authorization = token;
  const formData = new FormData();

  if (req.picture !== null) formData.append("picture", req.picture);
  formData.append("requestDto", new Blob([JSON.stringify(req.requestDto)], { type: "application/json" }));

  const response = await fetch(reqUrl, {
    method: "PUT",
    headers: { Authorization },
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    alert(data.statusMessage);
  }
}

export async function deleteProduct(storeId: string, productId: string, token: string | undefined) {
  if (!token) throw new Error("로그인이 필요합니다.");

  const reqUrl = `${API_URL}/api/stores/${storeId}/products/${productId}`;

  const response = await fetch(reqUrl, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Authorization: token },
  });

  const data = await response.json();

  if (!response.ok) {
    alert(data.statusMessage);
  }
}
