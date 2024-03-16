<template>
  <div>
    <header>
      <TheNav />
    </header>
    <main>
      <WhoAreWe />
      <MegansPlace />
      <Furniture />
      <Contact />
      <Directors/>
      <TheFooter />
    </main>
  </div>
</template>

<script>
import { useMainStore } from "@/store/main";

const mainStore = useMainStore();

export default {
  created() {
    this.initData()
  },
  methods: {
    fetchSheetsData() {
      console.log("test");
    },
    initData () {
      mainStore.INIT_ALL_DATA();
    }
  },
};
</script>
