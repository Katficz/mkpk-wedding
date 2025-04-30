<template>
  <div class="hero-container">
    <div class="text-content q-pa-md text-white text-center">
      <div class="text-h5 q-mb-sm q-mb-xl">BIERZEMY ŚLUB</div>
      <div class="text-h2 q-mb-sm q-mb-lg">
  Marcela<span class="name-break"><br></span> & Paweł
</div>      <div class="text-h5 q-mb-sm q-mb-md">09 Maj 2025</div>
      <CountdownTimer />
    </div>
  </div>
</template>

<script setup lang="ts">
import CountdownTimer from "./CountdownTimer.vue";
</script>

<style scoped>
.hero-container {
  width: 100vw;
  min-height: 1000px;
  background-image: url("../assets/widok.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10vh;
  box-sizing: border-box;
}
.text-content {
  border-radius: 8px;
  padding: 1.5rem;
}

@media screen and (max-width: 700px) {
  .hero-container {
    background-image: url("../assets/widok_cut2.jpg");
  }
}

.image-full {
  background-image: url("../assets/widok.jpg");
}

.name-break {
  display: none;
}

@media (max-width: 500px) {
  .name-break {
    display: inline;
  }
}
</style>
