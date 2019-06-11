<template>
  <RegisterComponent />
</template>

<script>
import RegisterComponent from '@/components/view/Register/index.vue';

export default {
  name: 'homePage',
  props: ['homeTitle'],
  components: {
    RegisterComponent,
  },
};
</script>
