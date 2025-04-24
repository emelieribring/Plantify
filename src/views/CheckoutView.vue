<template>
  <section class="w-screen min-h-screen bg-[#f6f2ea] px-6 py-20">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-green-900 mb-10 text-center">Checkout</h1>

      <div v-if="cart.items.length === 0" class="text-center text-green-800">
        Din varukorg är tom 😢
      </div>

      <div v-else class="flex flex-col gap-6">
        <!-- Produkter -->
        <div
          v-for="(item, index) in cart.items"
          :key="index"
          class="flex items-center justify-between bg-white rounded-xl shadow p-4"
        >
          <div class="flex items-center gap-4">
            <img :src="item.image" :alt="item.name" class="w-24 h-24 object-cover rounded-lg" />
            <div>
              <h2 class="text-lg font-semibold text-green-900">{{ item.name }}</h2>
              <p class="text-green-700">{{ item.price }} kr</p>
            </div>
          </div>
        </div>

        <!-- Totalsumma -->
        <div class="mt-8 text-right text-green-900 font-bold text-xl">
          Totalsumma: {{ total }} kr
        </div>

        <!-- Betalknapp -->
        <button
          @click="checkout"
          class="mt-6 self-end px-6 py-3 bg-green-700 text-white rounded-full shadow hover:bg-green-800 transition"
        >
          Betala nu
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cart = useCartStore()

const total = computed(() => cart.items.reduce((sum, item) => sum + item.price, 0))

const checkout = async () => {
  try {
    const res = await fetch('http://localhost:4242/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: cart.items,
      }),
    })

    const data = await res.json()
    if (data.url) {
      window.location = data.url
    }
  } catch (err) {
    console.error('Något gick fel med Stripe Checkout', err)
  }
}
</script>
