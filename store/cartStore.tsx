import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type Item = {
  id: number
  title: string
  description?: string
  price: number
  discountPercentage: number
  rating?: number
  stock?: number
  brand?: string
  category?: string
  thumbnail?: string
  images?: string[]
  quantity: number
}

type ItemState = {
  items: Item[]
  addItemToCart: (item: Item) => void
  removeItemFromCart: (id: string) => void
  total: () => number
  removeAll: () => void
  increment: (id: number) => void
  decrement: (id: number) => void
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
      increment: (id: number) =>
        get()
          .items.filter((item) => item.id === id)
          .map(() =>
            set((state) => ({
              items: state.items.map((item) =>
                item.id === id
                  ? { ...item, quantity: (item.quantity || 0) + 1 }
                  : item
              ),
            }))
          ),
      decrement: (id: number) =>
        get()
          .items.filter((item) => item.id === id)
          .map(() =>
            set((state) => ({
              items: state.items.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity:
                        item.quantity === 1
                          ? (item.quantity = 1)
                          : (item.quantity || 0) - 1,
                    }
                  : item
              ),
            }))
          ),
    }),

    { name: 'cartStore', storage: createJSONStorage(() => localStorage) }
  )
)
