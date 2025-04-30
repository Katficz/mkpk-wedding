<template>
  <q-card
    class="my-card q-mb-md text-center little-gray-text"
    :class="small ? 'small-card' : 'big-card'"
    square
  >
    <q-card-section class="q-pa-none full-height relative-position">
      <slot />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
defineProps({
  small: {
    type: Boolean,
  },
});
</script>

<style scoped lang="scss">
.my-card {
  width: 450px;
  height: 650px;
  padding: 15px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3); /* Nice shadow */
  background-color: white;
  border: 1px solid $main-border;
}
.small-card {
  width: 340px;
  height: 550px;
}
.big-card {
  width: 450px;
  height: 650px;
}
</style>
