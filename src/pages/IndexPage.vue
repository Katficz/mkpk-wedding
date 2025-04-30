<template>
  <q-page class="q-pa-none">
    <div class="q-mb-xl">
      <HeaderWithPhoto />
    </div>
    <div class="q-mb-xl">
      <BeWithUs />
    </div>
    <div class="q-mb-xl">
      <TheGoogleTiles />
    </div>
    <div class="q-mb-xl">
      <OurStory />
    </div>
    <div class="q-mb-xl">
      <GuestGuide />
    </div>
    <div class="q-mb-xl">
      <AdditionalInfo />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import HeaderWithPhoto from "src/components/HeaderWithPhoto.vue";
import BeWithUs from "src/components/BeWithUs.vue";
import TheGoogleTiles from "src/components/TheGoogleTiles.vue";
import OurStory from "src/components/OurStory.vue";
import GuestGuide from "src/components/GuestGuide.vue";
import AdditionalInfo from "src/components/AdditionalInfo.vue";
</script>

<style scoped></style>
