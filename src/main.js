import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, fab } from '@fortawesome/free-brands-svg-icons';
import { faClone, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import initializeFirebase from '@/lib/firebase';

initializeFirebase();

library.add(faUserSecret, faClone, fab, faGithub);
 
Vue.component('font-awesome-icon', FontAwesomeIcon);

import './assets/css/Root.scss';

Vue.config.productionTip = false;

const vue = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

export default vue;
