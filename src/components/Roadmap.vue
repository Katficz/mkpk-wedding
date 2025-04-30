<template>
  <div class="row justify-center">
    <div class="column">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="row no-wrap q-gutter-md"
        style="align-items: stretch"
      >
        <!-- Label column -->
        <div
          class="text-right q-mb-xl"
          style="
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            line-height: 15px;
          "
        >
          <span>{{ item.label }}</span>
        </div>

        <!-- Center column with dot and line -->
        <div
          class="column items-center q-mb-xl"
          style="width: 20px; position: relative"
        >
          <div style="z-index: 1">
            <q-icon name="circle" size="12px" class="icon-color" />
          </div>
          <div
            v-if="index < items.length - 1"
            style="
              position: absolute;
              top: 12px;
              height: 90px;
              width: 2px;
              background: #ccc;
            "
          />
        </div>

        <!-- Date column -->
        <div
          class="text-left q-mb-xl"
          style="width: 150px; display: flex; align-items: center"
        >
          <span>{{ item.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.icon-color {
  color: #c78665;
}
</style>
