export type Product = {
  id: number
  name: string
  weight: string
  price: number
  oldPrice: number
  inStock: boolean
  category: string
  image: string
}

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("http://localhost:3000/products");
  if (!res.ok) {
    throw new Error("Не удалось загрузить товары");
  }
  return res.json();
};