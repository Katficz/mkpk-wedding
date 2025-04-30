<template>
  <div
    class="countdown-clock text-h3 text-weight-bold  q-px-xs self-center"
  >
    {{ timeLeft.days }}d: {{ timeLeft.hours }}h: {{ timeLeft.minutes }}m:
    {{ timeLeft.seconds }}s
  </div>
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
  height: 400px;
  padding: 2px;
}

.countdown-clock {
  font-family: "Courier New", monospace;
}
</style>