<template>
  <div id="app">
    <Navigation />
    <main id="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/shared/Navigation/index.vue';
import '@/assets/css/App.scss';

export default {
  name: 'App-Root',
  components: {
    Navigation,
  },
};
</script>
