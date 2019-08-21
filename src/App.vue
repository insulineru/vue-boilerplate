<template lang="pug">
  v-app(:dark='dark' )
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
  mounted () {
    if (this.$store.getters.dark) {
      this.$vuetify.theme.dark = true
    }
  },
  computed: {
    dark() {
      return this.$store.getters.dark;
    }
  }
};
</script>
