import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  weight: string;
  price: number;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  total: number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addToCart: (item) => {
    const existing = get().items.find((i) => i.id === item.id);
    if (existing) {
      get().increment(item.id);
    } else {
      set((state) => ({
        items: [...state.items, { ...item, quantity: 1 }],
      }));
    }
  },
  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),
  increment: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    })),
  decrement: (id) =>
    set((state) => {
      const updated = state.items
        .map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0);
      return { items: updated };
    }),
  get total() {
    return get().items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },
}));