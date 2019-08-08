import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { createRouter } from './router';
import { createStore } from './client/store';

import App from './App.vue';

Vue.use(BootstrapVue);

export function createApp() {
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });

  return { app, router, store };
}
