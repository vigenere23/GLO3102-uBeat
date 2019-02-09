// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vuetify from 'vuetify';
import Vue from 'vue';
import App from './App';
import router from './router';


Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: '#0D2029',
    secondary: '#182A33',
    // secondary: '#40525B',
    accent: '#FFFAEC',
    menuText: 'BAAD8C',
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
