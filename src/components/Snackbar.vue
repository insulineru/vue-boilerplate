<template lang="pug">
  v-snackbar(app v-model='active', :timeout='4000', top, :color='color', flat)
    span {{text}}
    v-btn(color='white', flat, @click='active = false') {{$t('close')}}

</template>

<script>
import { i18n } from "../plugins/i18n";

export default {
  name: "Snackbar",
  computed: {
    active: {
      get: function() {
        return this.$store.getters.snackbar.active;
      },
      set: function() {
        this.$store.dispatch("hideSnackbar");
      }
    },
    color() {
      const snackbar = this.$store.getters.snackbar;
      return snackbar.color;
    },
    text() {
      const msg = this.$store.getters.snackbar.message;
      return typeof msg === "string"
        ? msg === "Internal Server Error"
          ? i18n.t("errors.internal")
          : i18n.t(this.$store.getters.snackbar.message.toString())
        : msg[i18n.locale];
    }
  }
};
</script>