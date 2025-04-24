<template>
  <section class="w-screen bg-[#f6f2ea] h-auto flex flex-col items-center px-6 py-20 gap-20">
    <!-- Hero text -->
    <div class="max-w-md flex flex-col items-center text-center">
      <img :src="logo" alt="Plantify logotyp" class="w-72 md:w-[400px] mb-0 mt-0" />
      <p class="text-green-800 text-lg md:text-xl mb-8">plants for a greener home</p>
      <router-link
        to="/shop"
        class="inline-block px-8 py-4 bg-[#3b4d36] text-white text-lg font-semibold rounded-full shadow hover:bg-green-800 transition"
      >
        Shop now
      </router-link>

      <!-- Scroll-pil -->
      <div class="mt-[150px] animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-green-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>

    <!-- Växtkolumner -->
    <div class="w-screen mt-[100px]">
      <h1 class="text-4xl mx-10 md:text-5xl font-extrabold text-green-900">Best sellers</h1>

      <div class="w-screen flex flex-wrap justify-center px-4 py-8">
        <div
          v-for="(column, index) in columns"
          :key="index"
          class="w-[350px] p-4 flex flex-col gap-4"
        >
          <div
            v-for="(plant, i) in column"
            :key="i"
            class="relative w-[300px] rounded-xl shadow overflow-hidden border"
            :style="{ height: plant.height + 'px' }"
          >
            <!-- Bild -->
            <img :src="plant.image" :alt="plant.alt" class="w-full h-full object-cover" />

            <!-- Rubrik-overlay -->
            <div
              class="absolute top-2 left-2 bg-white/80 text-green-900 font-bold px-3 py-1 rounded"
            >
              {{ plant.alt }}
            </div>

            <!-- Knapp-overlay -->
            <button
              class="absolute bottom-2 right-2 bg-green-700 text-white text-sm px-3 py-1 rounded hover:bg-green-800 transition"
              @click="cart.addToCart({ name: plant.name, image: plant.image, price: 249 })"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logoPlant.png'

import { useCartStore } from '@/stores/cartStore'
const cart = useCartStore()

interface PlantBox {
  height: number
  image: string
  alt: string
}

const sharedImage =
  'https://img.freepik.com/premium-photo/beautiful-monstera-flower-white-pot-stands-wooden-stump-white-background_1048944-26497880.jpg?w=826'

const columns: PlantBox[][] = [
  [
    { height: 200, image: sharedImage, alt: 'Monstera' },
    { height: 400, image: sharedImage, alt: 'Palettblad' },
    { height: 300, image: sharedImage, alt: 'Aloe Vera' },
  ],
  [
    { height: 200, image: sharedImage, alt: 'Ormbunke' },
    { height: 200, image: sharedImage, alt: 'Kaktus' },
    { height: 500, image: sharedImage, alt: 'Gummiträd' },
  ],
  [
    { height: 400, image: sharedImage, alt: 'Fikus' },
    { height: 200, image: sharedImage, alt: 'Dracena' },
    { height: 300, image: sharedImage, alt: 'Murgröna' },
  ],
  [
    { height: 300, image: sharedImage, alt: 'Bonsai' },
    { height: 200, image: sharedImage, alt: 'Paradisträd' },
    { height: 400, image: sharedImage, alt: 'Strelitzia' },
  ],
]
</script>

<style scoped>
/* Extra styling om du vill lägga till något fancy */
</style>
