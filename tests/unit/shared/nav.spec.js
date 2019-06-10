import { mount, RouterLinkStub } from '@vue/test-utils';
import Navigation from '@/components/shared/Navigation/index.vue';

describe('Navigation.vue', () => {
  it('successfully renders the navigation component', () => {
    const wrapper = mount(Navigation, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(wrapper).toBeTruthy();
  });
});
