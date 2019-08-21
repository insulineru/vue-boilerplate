import Vue from 'vue';

import App from './App.vue';

import router from './router';
import store from './store/';
import { i18n } from './plugins/i18n';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
