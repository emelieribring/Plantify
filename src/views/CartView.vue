<template>
  <section class="w-screen min-h-screen bg-[#f6f2ea] px-6 py-20">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-green-900 mb-10 text-center">Cart</h1>

      <div v-if="cart.items.length === 0" class="text-center text-green-800">
        🛒 Your cart is empty!
      </div>

      <div v-else class="flex flex-col gap-6">
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
          <!-- (Valfritt: Remove-knapp) -->
        </div>

        <!-- Totalsumma -->
        <div class="mt-8 text-right text-green-900 font-bold text-xl">Total: {{ total }} kr</div>

        <!-- Töm varukorg -->
        <button
          class="mt-4 self-end bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
          @click="cart.clearCart"
        >
          Töm varukorg
        </button>

        <!-- Betala-knapp -->
        <router-link
          to="/checkout"
          class="mt-2 self-end bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
        >
          Betala
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cart = useCartStore()

const total = computed(() => cart.items.reduce((sum, item) => sum + item.price, 0))
</script>
