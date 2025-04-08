<template>
  <div class="row gifts-container">
    <div class="content-box">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.gifts-container {
  background-image: url("../assets/zaproszenie.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  min-height: calc(100vh - 100px); /* adjust if navbar/footer height differs */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.content-box {
  background-color: rgba(255, 255, 255, 0.95); /* translucent white */
  padding: 2rem;
  border-radius: 16px;
  max-width: 700px;
  width: 100%;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
</style>
