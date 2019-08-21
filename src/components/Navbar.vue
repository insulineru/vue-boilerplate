<template lang="pug">
  nav
    v-app-bar(flat app)
      // Title
      v-toolbar-title.text-uppercase.grey--text
        span {{$t('title')}}
      v-spacer
      // Dark mode
      v-btn(text icon color='grey' @click='toggleMode')
        v-icon(small) brightness_2
      // Language picker
      v-menu(offset-y)
        template(v-slot:activator='{ on }')
          v-btn(text icon v-on='on' color='grey') {{currentLocale.icon}}
        v-list
          v-list-item(v-for='locale in locales' @click='changeLanguage(locale.code)' :key="locale.code")
            v-list-item-content
              v-list-tile-title {{locale.icon}}
</template>

<script>
import { i18n } from "../plugins/i18n";

export default {
  name: "Navbar",
  computed: {
    locales() {
      return [{ icon: "🇺🇸", code: "en" }, { icon: "🇷🇺", code: "ru" }];
    },
    currentLocale() {
      for (const locale of this.locales) {
        if (locale.code === i18n.locale) {
          return locale;
        }
      }
      return "en";
    }
  },
  methods: {
    toggleMode() {
      this.$store.dispatch("setDark", !this.$store.getters.dark);
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark; 
    },
    changeLanguage(locale) {
      i18n.locale = locale;
      this.$store.dispatch("setLanguage", locale);
      document.title = i18n.t("strippedTitle");
    }
  }
};
</script>

<style>
nav a:link {
  text-decoration: none;
}
nav a:visited {
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
nav a:active {
  text-decoration: underline;
}
</style>