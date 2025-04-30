<template>
  <div class="row justify-around">
    <CardWrapper>
      <template v-slot:default>
        <div class="cool-image">
          <img
            decoding="async"
            src="https://pokazowastrona.mojewesele.online/wp-content/uploads/2025/02/rings-2.png"
            alt=""
            width="87"
            height="87"
            loading="lazy"
          />
        </div>
        <div class="text-h5 q-mb-sm q-mt-sm little-gray-text">
          <b>Miejsce ceremonii</b>
        </div>
        <div class="text-h5 q-mb-sm q-mt-sm little-gray-text">
          Kościół Rzymskokatolicki pw. św. Ap. Piotra i Pawła
        </div>
        <div class="text-h6 q-mb-sm q-mt-sm little-gray-text">
          Plac Konstytucji 3 Maja 2, 74-400 Dębno
        </div>
        <div class="text-h6 q-mb-sm q-mt-sm little-gray-text">
          Godzina 15:30
        </div>
        <div class="col-md-6 col-12 image-wrapper">
          <q-img fit="contain" src="~assets/kosciol_2.png" style="height: 250px;" />
        </div>
        <div
          class="text-h4 q-mb-sm q-mt-xl q-mt-auto button-wrapper full-width"
        >
          <q-btn
            size="lg"
            label="Prowadź do Kościoła"
            icon="navigation"
            no-caps
            type="a"
            target="_blank"
            href="https://www.google.pl/maps/dir//Ko%C5%9Bci%C3%B3%C5%82+Rzymskokatolicki+pw.+%C5%9Bw.+Ap.+Piotra+i+Paw%C5%82a,+Plac+Konstytucji+3+Maja+2,+74-400+D%C4%99bno/@52.7401528,14.6944179,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47076b8885314a95:0x5288491ccb11e321!2m2!1d14.6969982!2d52.7401496!3e0?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
          />
        </div>
      </template>
    </CardWrapper>
    <CardWrapper>
      <template v-slot:default>
        <div class="cool-image">
          <img
            decoding="async"
            src="https://pokazowastrona.mojewesele.online/wp-content/uploads/2025/02/champagne-4.png"
            alt=""
            width="87"
            height="87"
            loading="lazy"
          />
        </div>
        <div class="text-h5 q-mb-sm q-mt-sm little-gray-text">
          A bawić będziemy się tutaj!
        </div>
        <div class="text-h5 q-mb-sm q-mt-sm little-gray-text">
          <b>Ranczo Radzicz</b>
        </div>
        <div class="text-h6 q-mb-sm q-mt-sm little-gray-text">
          Radzicz 2a, 74-311 Różańsko
        </div>
        <div class="col-md-6 col-12">
          <q-img fit="scale-down" src="~assets/ranczo.png" />
        </div>
        <div class="text-h4 q-mb-sm q-mt-xl button-wrapper full-width">
          <q-btn
            class="q-mt-auto q-ml-auto q-mr-auto"
            size="lg"
            label="Prowadź do sali"
            icon="navigation"
            no-caps
            type="a"
            target="_blank"
            href="https://www.google.pl/maps/dir//Ranczo+Radzicz,+Radzicz+2a,+74-311+R%C3%B3%C5%BCa%C5%84sko/@52.8549095,14.7339259,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4703bd24747ae4ef:0x50bc57395d0fa23a!2m2!1d14.7365062!2d52.8549063!3e0?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
          />
        </div>
      </template>
    </CardWrapper>
  </div>
</template>

<script setup lang="ts">
import CardWrapper from "./CardWrapper.vue";
</script>

<style scoped>
.button-wrapper {
  position: absolute;
  bottom: 0;
}
</style>
