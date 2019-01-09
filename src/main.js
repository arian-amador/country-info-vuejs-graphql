import Vue from 'vue';
import VueLodash from 'vue-lodash';
import Vuetify from 'vuetify';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import { createProvider } from './vue-apollo';

import 'babel-polyfill';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
Vue.use(VueLodash, {});
Vue.use(Vuetify);

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App),
}).$mount('#app');
