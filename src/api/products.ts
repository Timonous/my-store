import { create } from "zustand"

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

type ProductState = {
  products: Product[]
  fetchProducts: () => Promise<void>
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const res = await fetch("http://localhost:3000/products") // заменишь на свой URL
      const data = await res.json()
      set({ products: data })
    } catch (error) {
      console.error("Ошибка загрузки товаров:", error)
    }
  },
}))