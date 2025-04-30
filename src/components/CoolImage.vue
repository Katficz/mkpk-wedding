<template>
  <div class="cool-image">
    <img
      decoding="async"
      :src="src"
      alt=""
      width="90"
      height="90"
      loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>

