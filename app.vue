<script setup lang="ts">
import { useMinistryDataStore } from "~/store/MinistryData";
const store = useMinistryDataStore();

callOnce(store.GET_ARTICLES)
callOnce(store.GET_DIRECTORS)
</script>

<template>
  <div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
@import "https://cdn.jsdelivr.net/npm/bulma-social@2/css/single/facebook/facebook.min.css";
</style>

<!-- <script setup>
// import { mainStore } from "./store/main.js";

// const main_store = mainStore.useMainStore();
// await useAsyncData('main', () => mainStore.INIT_ALL_DATA().then(() => true));
</script> -->
