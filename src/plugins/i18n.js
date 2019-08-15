import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { messages } from '../assets/localization';
import store from '../store/index';
Vue.use(VueI18n);

function getNavigatorLanguage() {
  if (store.getters.language) {
    return store.getters.language;
  } else {
    return 'ru';
  }
}

export const i18n = new VueI18n({
  locale: getNavigatorLanguage(),
  messages
});
