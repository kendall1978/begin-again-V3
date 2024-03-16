<template>
  <section class="section is-small anchor" id="board">
    <div class="container">
      <div class="title">
        <h1 class="title is-2">Board of Directors</h1>
      </div>
      <div v-for="director in directorsArray" class="columns is-multiline mt-5 is-8 is-variable">
        <div class="column is-12-mobile is-6-tablet is-6-desktop">
          <div class="card p-2">
            <div class="card-content">
              <h3 class="title is-3">{{ director.firstname }} {{ director.lastname }}</h3>
              <h4 class="subtitle is-4">{{ director.title }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useMainStore } from "@/store/main";

export default {
  setup() {
    const mainStore = useMainStore()
    return { mainStore }
  },
  computed: {
    directorsArray() {
      return this.mainStore.Directors
    }
  }
}
</script>
