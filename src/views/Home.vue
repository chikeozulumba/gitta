<template>
  <div class="home">
    <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from '@/components/view/Home/index.vue';

export default {
  name: 'homePage',
  props: ['homeTitle'],
  components: {
    HomeComponent,
  },
};
</script>
