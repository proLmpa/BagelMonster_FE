"use client";

import { usePathname, useRouter } from "next/navigation";

import StatusIcon from "../productDetail/StatusIcon";

import type { Product } from "@/types/product.type";

interface StoreMenuProps {
  products: Product[];
}

export default function StoreMenu({ products }: StoreMenuProps) {
  const router = useRouter();
  const currentPath = usePathname();

  const onClickMenu = (productId: number) => {
    router.push(`${currentPath}/${productId}`);
  };

  return (
    <section>
      <ol>
        {products.length === 0 ? (
          <li>
            <span>메뉴가 없습니다.</span>
          </li>
        ) : (
          products.map((product: Product) => (
            <li
              onClick={() => onClickMenu(product.productId)}
              className="flex w-full py-3 px-5 mb-[25px] cursor-pointer"
              key={product.productId}
            >
              <div className="bg-fuchsia-300 w-[45px] h-[45px] border">사진</div>
              <div className="gap-2 text-sm ml-5 mr-2">
                <h4 className="font-semibold">{product.name}</h4>
                <span className="text-orange">{Number(product.price).toLocaleString()}원</span>
              </div>
              {Number(product.popularity) > 3 && <StatusIcon status="HOT" />}
            </li>
          ))
        )}
      </ol>
    </section>
  );
}
