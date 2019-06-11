import { mount } from '@vue/test-utils';
import Dashboard from '@/views/Dashboard.vue';
import DashboardComponent from '@/components/view/Dashboard/index.vue';

describe('Dashboard.vue', () => {
  it('successfully renders the view', () => {
    const wrapper = mount(Dashboard);
    const dashboardComponentWrapper = mount(DashboardComponent);
    expect(wrapper.find(dashboardComponentWrapper)).toBeTruthy();
  });
});
