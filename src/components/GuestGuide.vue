<template>
  <div class="background-color row justify-around q-pt-xl">
    <CardWrapper small>
      <div class="q-pt-md">
        <CoolImage
          :src="'https://pokazowastrona.mojewesele.online/wp-content/uploads/2024/01/hotel-1-150x150.png'"
        />
        <div class="text-h5 q-mb-sm q-mt-sm little-gray-text">
          Zakwaterowanie
        </div>
        <div class="text-h6 q-mb-sm q-mt-xl little-gray-text">
          Pokoje będą dostępne od godziny 13:00.
        </div>
      </div>
    </CardWrapper>
    <CardWrapper small>
      <div class="q-pt-md">
        <CoolImage
          :src="'https://pokazowastrona.mojewesele.online/wp-content/uploads/2024/01/image-gallery-150x150.png'"
        />
        <div class="text-h5 q-mb-sm q-mt-sm little-gray-text">Zdjęcia</div>
        <div class="text-h6 q-mb-sm q-mt-sm little-gray-text">
          Prześlij nam fotkę!
          <div class="q-mb-sm">
            <q-btn
              size="lg"
              label="Prześlij nam zdjęcie!"
              icon="photo"
              no-caps
              class="q-mt-md"
              type="a"
              target="_blank"
              href="https://drive.google.com/drive/folders/11ubiNKSssmpR5F3MAr6lK06GJY8TVKV6?usp=sharing"
            />
          </div>
          Kliknij w przycisk, lub skanuj kod QR.
          <div>
            <q-img src="../assets/dyskQR.png" class="qr-size" />
          </div>
        </div>
      </div>
    </CardWrapper>
    <CardWrapper small>
      <div class="q-pt-md">
        <CoolImage
          :src="'https://pokazowastrona.mojewesele.online/wp-content/uploads/2024/01/gift-150x150.png'"
        />
        <div class="text-h5 q-mb-sm q-mt-sm little-gray-text">Prezenty</div>
        <div class="text-h6 q-mb-sm q-mt-sm little-gray-text">
          Wasza obecność w tym wyjątkowym dla nas dniu będzie największym
          prezentem. Jeśli jednak chcielibyście obdarować nas czymś więcej,
          prosimy zamiast kwiatów o <b> bony do Leroy Merlin</b> - pomożecie
          nam tym samym urządzić wspólny dom. <br/> Zamiast klasycznych upominków
          ucieszy nas też <b>koperta</b>.
        </div>
      </div>
    </CardWrapper>
  </div>
</template>

<script setup land="ts">
import CardWrapper from "./CardWrapper.vue";
import CoolImage from "./CoolImage.vue";
</script>

<style scoped>
.background-color {
  width: 100vw;
  background: linear-gradient(
    180deg,
    rgb(244, 240, 237) 7%,
    rgb(255, 255, 255) 77%
  );
}
.qr-size {
  width: 150px;
  height: 150px;
  margin-top: 20px;
}
</style>
