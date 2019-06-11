import Vue from 'vue';
import { auth } from 'firebase';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue'),
    },
  ],
});

const authRoutes = ['login', 'register'];
const restrictedRoutes = ['dashboard'];

router.beforeEach((to, from, next) => {
  let isAuth = null;
  auth().onAuthStateChanged((user) => {
    if (user) {
      isAuth = true;
    }
    if (isAuth && authRoutes.includes(to.name)) {
      return next('/dashboard');
    }
    if (!isAuth && restrictedRoutes.includes(to.name)) {
      return next('/login');
    }
    return next();
  });
});

export default router;
