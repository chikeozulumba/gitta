<template>
  <LoginComponent />
</template>

<script>
import LoginComponent from '@/components/view/Login/index.vue';

export default {
  name: 'homePage',
  props: ['homeTitle'],
  components: {
    LoginComponent,
  },
};
</script>
