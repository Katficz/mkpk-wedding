<template>
  <div class="row">
    <div class="col-12 col-md-6 text-center self-center">
      <div class="cool-image">
        <img
          decoding="async"
          src="https://pokazowastrona.mojewesele.online/wp-content/uploads/2025/02/champagne-4.png"
          alt=""
          width="90"
          height="90"
          loading="lazy"
        />
      </div>
      <div class="text-h4 q-mb-md">Nasza historia</div>
      <div class="text-h6 q-mb-md q-pa-sm little-gray-text">
        <Roadmap :items="roadmapItems" />

        <div class="text-h5 q-mb-md q-pa-md">Nasze zdrowie!</div>
      </div>
    </div>
    <div class="col-md-6 col-12">
      <q-img src="~assets/drink.jpg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Roadmap from "./Roadmap.vue";
const roadmapItems = [
  { label: "Pierwsze spotkanie", date: "01.09.2012" },
  { label: "Pierwsza randka", date: "03.06.2018" },
  { label: "Zaręczyny", date: "11.11.2023" },
  { label: "Ślub", date: "09.05.2025" },
];
</script>

<style scoped></style>
