<template>
  <div
    class="break-inside-avoid bg-white rounded-xl shadow p-4 flex flex-col items-center min-h-[300px]"
  >
    <img :src="image" :alt="name" class="w-full h-auto object-cover rounded-md mb-4" />
    <h3 class="text-xl font-semibold text-green-800 text-center">{{ name }}</h3>
    <p class="text-green-600 mb-2">{{ price }} kr</p>
    <router-link
      :to="`/product/${id}`"
      class="mt-auto px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
    >
      Visa produkt
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: number
  name: string
  price: number
  image: string
}>()
</script>
