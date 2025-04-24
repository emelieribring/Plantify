<template>
  <section class="w-screen bg-[#f6f2ea] min-h-screen px-6 py-20">
    <div class="max-w-5xl mx-auto flex flex-col gap-16">
      <!-- Rubrik -->
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">Om Plantify</h1>
        <p class="text-green-800 text-lg md:text-xl max-w-2xl mx-auto">
          Vi är en liten men passionerad växtbutik som inte riktigt vet vad vi håller på med – men
          oj vad vi älskar blad.
        </p>
      </div>

      <!-- Sektion 1 -->
      <div class="flex flex-col md:flex-row items-center gap-10">
        <img :src="monsteraplant" class="rounded-xl w-full md:w-1/2 object-cover" />
        <div class="flex flex-col gap-4 text-green-800 md:w-1/2">
          <h2 class="text-2xl font-semibold text-green-900">Vår vision</h2>
          <p>
            På Plantify tror vi att varje hem mår bättre med lite grön kärlek. Därför erbjuder vi
            handplockade växter med exakt rätt mängd karaktär och vattenbehov.
          </p>
          <p>
            Alla våra plantor är odlade med mild musik i bakgrunden, pepp-talks på morgonen och en
            nypa naturlig magi.
          </p>
        </div>
      </div>

      <!-- Sektion 2 -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-10">
        <img :src="ormbunkeplant" class="rounded-xl w-full md:w-1/2 object-cover" />
        <div class="flex flex-col gap-4 text-green-800 md:w-1/2">
          <h2 class="text-2xl font-semibold text-green-900">Vår mission</h2>
          <p>
            Vi vill sudda ut gränsen mellan inomhus och utomhus – och samtidigt göra växtvärlden
            tillgänglig för alla.
          </p>
          <p>
            Oavsett om du har gröna fingrar eller bara gillar att låtsas, har vi en planta för dig.
            Och ja, vi döper dem åt dig om du vill.
          </p>
        </div>
      </div>

      <!-- (Valfritt) Team eller kontakt -->
      <div class="text-center text-green-800 mt-12">
        <p>📍 Plantify HQ ligger antagligen i ett växthus någonstans.</p>
        <p>📬 Kontakt: kontakt@plantify.fake</p>
      </div>
    </div>
    <!-- Team -->
    <div class="mt-24">
      <h2 class="text-3xl font-bold text-green-900 text-center mb-10">Möt vårt team</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div class="flex flex-col items-center text-center gap-3">
          <img :src="elin" class="w-28 h-30 rounded-full object-cover shadow-md" />
          <h3 class="text-lg font-semibold text-green-900">Elin</h3>
          <p class="text-green-800 text-sm">Växtvårdsexpert. Pratar med blommor på lunchen.</p>
        </div>
        <div class="flex flex-col items-center text-center gap-3">
          <img :src="jonas" class="w-28 h-30 rounded-full object-cover shadow-md" />
          <h3 class="text-lg font-semibold text-green-900">Jonas</h3>
          <p class="text-green-800 text-sm">
            Logistikchef. Har aldrig glömt att vattna en enda planta.
          </p>
        </div>
        <div class="flex flex-col items-center text-center gap-3">
          <img :src="mimmi" class="w-28 h-30 rounded-full object-cover shadow-md" />
          <h3 class="text-lg font-semibold text-green-900">Mimmi</h3>
          <p class="text-green-800 text-sm">
            Designansvarig. Kan placera en Monstera med ögonbindel.
          </p>
        </div>
      </div>
    </div>

    <!-- Roadmap -->
    <div class="mt-32">
      <h2 class="text-3xl font-bold text-green-900 text-center mb-10">Vår resa 🌱</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl shadow p-6 text-center flex flex-col gap-3">
          <span class="text-green-700 font-semibold text-sm">2023</span>
          <h3 class="text-xl font-bold text-green-900">Idén föds</h3>
          <p class="text-green-800 text-sm">
            Efter att ha dödat en kaktus föddes tanken: hur kan växter överleva ändå?
          </p>
        </div>
        <div class="bg-white rounded-xl shadow p-6 text-center flex flex-col gap-3">
          <span class="text-green-700 font-semibold text-sm">2024</span>
          <h3 class="text-xl font-bold text-green-900">Plantify lanseras</h3>
          <p class="text-green-800 text-sm">
            Vi gick från idé till verklighet. Första beställningen: en Ormbunke till morfar.
          </p>
        </div>
        <div class="bg-white rounded-xl shadow p-6 text-center flex flex-col gap-3">
          <span class="text-green-700 font-semibold text-sm">2025</span>
          <h3 class="text-xl font-bold text-green-900">Vi växer</h3>
          <p class="text-green-800 text-sm">
            Plantify är nu det grönaste hörnet på internet. Nästa mål: en fysisk butik i ett
            växthus.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import monsteraplant from '@/assets/images/plant-monstera.png'
import ormbunkeplant from '@/assets/images/ormbunke-plant.png'
import mimmi from '@/assets/images/mimmi.png'
import jonas from '@/assets/images/jonas.png'
import elin from '@/assets/images/elin.png'
</script>

<style scoped>
/* Extra style? Let's go */
</style>
