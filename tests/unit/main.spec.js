import { shallowMount } from '@vue/test-utils';
import Main from '@/main';

describe('Home.vue', () => {
  it('successfully renders the main component', () => {
    const wrapper = shallowMount(Main);
    expect(wrapper).toBeTruthy();
  });
});
