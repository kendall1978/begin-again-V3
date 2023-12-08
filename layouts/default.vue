<template>
  <TheNav />
  <WhoAreWe />
  <MegansPlace />
  <Furniture />
  <Contact />
  <Directors />
  <TheFooter />
</template>

<script>
import { useMainStore } from "@/store/main";

const mainStore = useMainStore();

export default {
  created() {
    this.fetchSheetsData();
  },
  methods: {
    fetchSheetsData() {
      console.log("test");
    },
  },
};
</script>
