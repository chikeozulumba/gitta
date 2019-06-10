import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  it('successfully renders the component', () => {
    const wrapper = mount(Home);
    expect(wrapper.classes()).toContain('home');
  });
});
