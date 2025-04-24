import { defineStore } from 'pinia'

interface CartItem {
  name: string
  image: string
  price: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  actions: {
    addToCart(item: CartItem) {
      this.items.push(item)
    },
    clearCart() {
      this.items = []
    },
  },
})
