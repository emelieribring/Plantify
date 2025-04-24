<template>
  <section class="w-screen bg-[#f6f2ea] min-h-screen px-6 py-20 flex flex-col gap-16 items-center">
    <!-- Kategori-bar -->
    <div class="flex flex-wrap gap-4 justify-center">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selectedCategory = cat"
        :class="[
          'px-6 py-2 rounded-full text-sm font-semibold transition',
          selectedCategory === cat
            ? 'bg-green-700 text-white shadow'
            : 'bg-white text-green-800 border border-green-700 hover:bg-green-100',
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Växtgrid -->
    <div class="w-screen flex flex-wrap justify-center px-4 py-8">
      <div
        v-for="(column, index) in filteredColumns"
        :key="index"
        class="w-[350px] p-4 flex flex-col gap-4"
      >
        <div
          v-for="(plant, i) in column"
          :key="plant.name + i"
          class="relative w-[300px] rounded-xl shadow overflow-hidden border"
          :style="{ height: plant.height + 'px' }"
        >
          <!-- Bild -->
          <img :src="plant.image" :alt="plant.alt" class="w-full h-full object-cover" />

          <!-- Rubrik -->
          <div class="absolute top-2 left-2 bg-white/80 text-green-900 font-bold px-3 py-1 rounded">
            {{ plant.name }}
          </div>

          <!-- Knapp -->
          <button
            class="absolute bottom-2 right-2 bg-green-700 text-white text-sm px-3 py-1 rounded hover:bg-green-800 transition"
            @click="cart.addToCart({ name: plant.name, image: plant.image, price: 249 })"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
const cart = useCartStore()

import { ref, computed } from 'vue'

interface PlantBox {
  height: number
  image: string
  name: string
  alt: string
  category: string
}

const sharedImage =
  'https://img.freepik.com/premium-photo/beautiful-monstera-flower-white-pot-stands-wooden-stump-white-background_1048944-26497880.jpg?w=826'

// Kategorier
const categories = ['Alla', 'Stora växter', 'Små växter', 'Blommande', 'Luftrenare']
const selectedCategory = ref('Alla')

// Växter
const columns: PlantBox[][] = [
  [
    {
      height: 200,
      image: sharedImage,
      name: 'Monstera',
      alt: 'Monstera',
      category: 'Stora växter',
    },
    {
      height: 400,
      image: sharedImage,
      name: 'Palettblad',
      alt: 'Palettblad',
      category: 'Blommande',
    },
    {
      height: 300,
      image: sharedImage,
      name: 'Aloe Vera',
      alt: 'Aloe Vera',
      category: 'Luftrenare',
    },
  ],
  [
    { height: 200, image: sharedImage, name: 'Ormbunke', alt: 'Ormbunke', category: 'Små växter' },
    { height: 200, image: sharedImage, name: 'Kaktus', alt: 'Kaktus', category: 'Små växter' },
    {
      height: 500,
      image: sharedImage,
      name: 'Gummiträd',
      alt: 'Gummiträd',
      category: 'Stora växter',
    },
  ],
  [
    { height: 400, image: sharedImage, name: 'Fikus', alt: 'Fikus', category: 'Stora växter' },
    { height: 200, image: sharedImage, name: 'Dracena', alt: 'Dracena', category: 'Luftrenare' },
    { height: 300, image: sharedImage, name: 'Murgröna', alt: 'Murgröna', category: 'Luftrenare' },
  ],
  [
    { height: 300, image: sharedImage, name: 'Bonsai', alt: 'Bonsai', category: 'Små växter' },
    {
      height: 200,
      image: sharedImage,
      name: 'Paradisträd',
      alt: 'Paradisträd',
      category: 'Blommande',
    },
    {
      height: 400,
      image: sharedImage,
      name: 'Strelitzia',
      alt: 'Strelitzia',
      category: 'Stora växter',
    },
  ],
]

// Filtrerat innehåll
const filteredColumns = computed(() => {
  if (selectedCategory.value === 'Alla') return columns

  // Filtrera varje kolumn individuellt
  return columns
    .map((col) => col.filter((plant) => plant.category === selectedCategory.value))
    .filter((col) => col.length > 0)
})
</script>

<style scoped>
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
</style>
