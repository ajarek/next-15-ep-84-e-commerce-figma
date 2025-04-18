import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type Item = {
  id: number;
  title: string;
  description?: string;
  price: number;
  discountPercentage: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
  quantity: number;
}

type ItemState = {
  items: Item[]
  addItemToCart: (item: Item) => void
  removeItemFromCart: (id: string) => void
  total: () => number
  removeAll: () => void
}

export const useCartStore = create<ItemState>()(
  persist(
    (set, get) => ({
      items: [],

      addItemToCart: (item: Item) =>
        set((state) => ({
          items: [item, ...state.items],
        })),

      removeItemFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== +id),
        })),

      total: () =>
        get().items.reduce(
          (acc, item) => acc + Number(item.price) * Number(item.quantity),
          0
        ),

      removeAll: () => set({ items: [] }),
    }),

    { name: 'cartStore', storage: createJSONStorage(() => localStorage) }
  )
)