import Vue from 'vue';
import { initializeApp, } from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, fab } from '@fortawesome/free-brands-svg-icons';
import { faClone, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './extensions';

library.add(faUserSecret, faClone, fab, faGithub);
 
Vue.component('font-awesome-icon', FontAwesomeIcon);

import './assets/css/Root.scss';

Vue.config.productionTip = false;

const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyD1WEJCS23fXkXj73uY50cU5nX6iuemxTs',
    authDomain: 'get-repo.firebaseapp.com',
    databaseURL: 'https://get-repo.firebaseio.com',
    projectId: 'get-repo',
    storageBucket: 'get-repo.appspot.com',
    messagingSenderId: '827711990794',
    appId: '1:827711990794:web:14d05be7183c6882'
};

initializeApp(FIREBASE_CONFIG);

const vue = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

export default vue;
