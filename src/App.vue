<template lang="pug">
  v-app(:dark='dark' :class='dark ? "grey darken-4" : "grey lighten-4"')
    cookie-law(theme='blood-orange'
    :buttonText='$t("cookieButton")'
    :message='$t("cookieMessage")')
    Navbar
    Snackbar
    v-content
      router-view
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Snackbar from "./components/Snackbar.vue";
import CookieLaw from "vue-cookie-law";

export default {
  name: "App",
  components: {
    CookieLaw,
    Navbar,
    Snackbar
  },
  data: () => ({
    //
  }),
  computed: {
    dark() {
      return this.$store.getters.dark;
    }
  }
};
</script>
