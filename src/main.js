import '@babel/polyfill';
import Vue from 'vue';
import { initializeApp } from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/css/Root.scss';

Vue.config.productionTip = false;

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyAqr7WJCzaYR5jkMi9NycJYEOyL0n5uSnw',
  authDomain: 'music-choice-app.firebaseapp.com',
  databaseURL: 'https://music-choice-app.firebaseio.com',
  projectId: 'music-choice-app',
  storageBucket: 'music-choice-app.appspot.com',
  messagingSenderId: '599223071676',
  appId: '1:599223071676:web:505f1e024709cb4c',
};

initializeApp(FIREBASE_CONFIG);

const vue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

export default vue;
