<template>
  <q-page class="q-pa-none">
    <div class="countdown-container flex column text-center cool-font">
      <h2 class="text-grey-9 mego-font">
        Do najpiękniejszego dnia w naszym życiu zostało:
      </h2>

      <div class="countdown-clock text-h1 text-weight-bold q-my-lg">
        {{ timeLeft.days }}d: {{ timeLeft.hours }}h: {{ timeLeft.minutes }}m:
        {{ timeLeft.seconds }}s
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-12">
        <q-img src="~assets/wschod_slonca.jpg" />
      </div>
      <div class="col-md-6 col-12 text-center q-pa-md self-center">
        <div class="text-h4 q-mb-md cool-font">
          Nie możemy się razem pobawimy!
        </div>
        <div class="text-h5 cool-font">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel rem
          adipisci atque voluptatibus nobis veniam minus eveniet commodi. Modi,
          blanditiis? Consequuntur temporibus vel maiores fugit maxime
          blanditiis voluptas est? Accusantium!
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-12 text-center q-pa-md self-center">
        <div class="text-h4 q-mb-md cool-font">
          Nasze zdrowie!
        </div>

      </div>
      <div class="col-md-6 col-12">
        <q-img src="~assets/drink.jpg" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const targetDate = new Date("2025-05-09T00:00:00");
const timeLeft = ref({
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
});

let interval: NodeJS.Timeout;

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance < 0) {
    clearInterval(interval);
    timeLeft.value = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timeLeft.value = {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.countdown-container {
  background: linear-gradient(#1b5e1f50, #ffffff);
  width: 100%;
  height: 500px;
  padding: 2rem;
}

.countdown-clock {
  font-family: "Courier New", monospace;
  letter-spacing: 4px;
}
</style>
