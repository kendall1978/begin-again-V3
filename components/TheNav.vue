<template>
  <nav
    class="navbar is-fixed-top has-shadow"
    style="background: #fff"
    id="my-nav"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger"
        id="burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" id="nav-links">
      <div class="navbar-start">
        <NuxtLink class="navbar-item" :to="`/articles/${megansPlaceSlug}`">Megan's Place</NuxtLink>
        <a class="navbar-item" href="">Board of Directors</a>
        <NuxtLink class="navbar-item" to="/admin">Admin</NuxtLink>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a
              class="button is-facebook"
              href="https://www.facebook.com/Begin-Again-Ministries-108864408483113"
            >
              <span class="icon">
                <font-awesome-icon icon="fa-brands fa-facebook" />
              </span>
              <span>Facebook</span>
            </a>
            <a
              class="button is-dark"
              href="https://www.paypal.com/US/fundraiser/charity/4542822"
            >
              <span class="icon">
                <font-awesome-icon icon="fa-brands fa-paypal" />
              </span>
              <span>Donate</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useMainStore } from "@/store/main";

export default {
  name: "TheNav",
  data () {
    return {
      mainStore: useMainStore()
      // megansPlaceSlug: this.mainStore.articles[0].slug
    }
  },
  created() {
  },
  computed: {
    async megansPlaceSlug() {
      return await this.mainStore.Articles[0].slug
    }
  }
}
</script>
