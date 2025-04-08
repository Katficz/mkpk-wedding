<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white">
        <q-btn
          v-if="drawerShouldBeVisible"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          text-color="green-10"
          @click="toggleLeftDrawer"
        />
        <div class="top-buttons">
          <q-btn
            v-for="link in linksList"
            no-caps
            flat
            text-color="green-10"
            @click="$router.push(link.url)"
            >{{ link.title }}</q-btn
          >
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="drawerShouldBeVisible"
      id="menu-drawer"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
          @click="$router.push(link.url)"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="bg-grey-8 text-white footer row">
      <div class="col-6 text-center self-center">
        <div class="q-mb-sm">Zerknij na:</div>
        <q-btn color="primary">Wydarzenie na facebook'u</q-btn>
      </div>
      <div class="col-6 text-center self-center">
        <div>W razie jakichkolwiek pytań prosimy dzwonić:</div>
        <div>Marcela: 665 101 802</div>
        <div>Paweł: 694 363 476</div>
      </div>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import EssentialLink, {
  type EssentialLinkProps,
} from "components/EssentialLink.vue";
import { useQuasar } from "quasar";
const $q = useQuasar();
const linksList: EssentialLinkProps[] = [
  {
    title: "Wesele",
    caption: "Informacje ogólne",
    icon: "favorite",
    url: '/'
  },
  {
    title: "Miejsca i dojazd",
    caption: "Linki do map",
    icon: "map",
    url: '/dojazd'
  },
  {
    title: "Prezenty",
    caption: "chat.quasar.dev",
    icon: "question_mark",
  },
];

const leftDrawerOpen = ref(false);

const drawerShouldBeVisible = computed(() => $q.screen.lt.md); // visible only below medium (≈< 1024px)

function toggleLeftDrawer() {
  // Only toggle if drawer is supposed to be visible
  if (drawerShouldBeVisible.value) {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  }
}
</script>

<style scoped>
@media screen and (max-width: 1023px) {
  .top-buttons {
    display: none;
  }
}
.top-buttons {
  margin-left: auto;
  margin-right: auto;
}
.footer {
  min-height: 130px;
}
</style>
