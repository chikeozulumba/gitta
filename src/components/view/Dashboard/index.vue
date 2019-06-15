<template>
  <div class="dashboard">
    <SearchComponent />
    <DisplayComponent />
  </div>
</template>

<script>
import SearchComponent from './Search/index.vue';
import DisplayComponent from './Display/index.vue';
import './style.scss';

export default {
  name: 'DashboardComponent',
  components: {
    SearchComponent,
    DisplayComponent,
  },
};
</script>

<style scoped>

</style>
