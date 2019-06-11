<template>
  <div class="dashboard">
    <DashboardComponent />
  </div>
</template>

<script>
import DashboardComponent from '@/components/view/Dashboard/index.vue';

export default {
  name: 'dashboardPage',
  components: {
    DashboardComponent,
  },
};
</script>
