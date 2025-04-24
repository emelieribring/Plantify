<template>
  <footer class="w-screen h-auto bg-green-900 text-green-50 px-6 py-10">
    <div class="w-screen mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Om -->
      <div>
        <h3 class="text-lg font-semibold mb-2">Plantify 🌿</h3>
        <p class="text-sm w-[250px] text-green-100">
          Tack för att du handlar grönt. Vi tror på växter, vila och verklig värme – både i hemmet
          och i hjärtat.
        </p>
      </div>

      <!-- Länkar -->
      <div class="flex flex-col gap-2">
        <h4 class="text-md font-semibold mb-1">Snabblänkar</h4>
        <router-link to="/" class="text-sm hover:underline">Start</router-link>
        <router-link to="/shop" class="text-sm hover:underline">Shop</router-link>
        <router-link to="/about" class="text-sm hover:underline">Om oss</router-link>
        <router-link to="/cart" class="text-sm hover:underline">Varukorg</router-link>
      </div>

      <!-- Kontakt -->
      <div>
        <h4 class="text-md font-semibold mb-1">Kontakt</h4>
        <p class="text-sm">kontakt@plantify.fake</p>
        <p class="text-sm">📍 Grönvägen 42, 123 45 Växtstad</p>
      </div>
    </div>

    <div class="mt-10 text-center text-xs text-green-200">
      &copy; 2025 Plantify. Alla rättigheter förbehållna.
    </div>
  </footer>
</template>

<script setup>
// inget just nu!
</script>
