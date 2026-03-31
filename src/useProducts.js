import { useEffect, useState } from "react";
import { getProducts } from "./api/products";

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);
  return products;
}
