<template>
  <header class="w-screen sticky top-0 z-50 bg-white shadow px-6 py-4">
    <nav class="max-w-8xl mx-auto flex justify-between items-center">
      <!-- Logga -->
      <router-link
        to="/"
        class="text-2xl font-bold text-green-900 flex items-center gap-2 hover:opacity-80 transition"
      >
        🌿 Plantify
      </router-link>

      <!-- Desktop-länkar -->
      <div class="hidden md:flex items-center gap-6">
        <router-link to="/shop" class="text-green-800 hover:text-green-900 font-medium transition">
          Shop
        </router-link>
        <router-link to="/about" class="text-green-800 hover:text-green-900 font-medium transition">
          Om oss
        </router-link>
        <router-link
          to="/cart"
          class="relative text-green-800 hover:text-green-900 font-medium transition"
        >
          🛒 Varukorg
          <span
            v-if="cart.items.length"
            class="absolute -top-2 -right-3 bg-green-700 text-white text-xs font-bold rounded-full px-2 py-0.5"
          >
            {{ cart.items.length }}
          </span>
        </router-link>
      </div>

      <!-- Mobile right section -->
      <div class="md:hidden flex items-center gap-4">
        <!-- Varukorg alltid synlig -->
        <router-link to="/cart" class="relative text-green-900 text-xl">
          🛒
          <span
            v-if="cart.items.length"
            class="absolute -top-2 -right-2 bg-green-700 text-white text-xs font-bold rounded-full px-1.5 py-0.5"
          >
            {{ cart.items.length }}
          </span>
        </router-link>

        <!-- Hamburger -->
        <button class="focus:outline-none" @click="isOpen = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-green-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Fullscreen overlay meny -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-green-900/90 text-green-50 flex flex-col items-center justify-center gap-8 z-50"
      >
        <!-- Stäng-knapp -->
        <button class="absolute top-6 right-6 text-3xl" @click="isOpen = false">×</button>

        <router-link to="/shop" @click="isOpen = false" class="text-2xl text-white hover:underline"
          >Shop</router-link
        >
        <router-link to="/about" @click="isOpen = false" class="text-2xl text-white hover:underline"
          >Om oss</router-link
        >
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cart = useCartStore()
const isOpen = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
