import faker from 'faker';
import { mount } from '@vue/test-utils';
import { initializeApp } from 'firebase';
import Register from '@/views/Register.vue';
import RegisterComponent from '@/components/view/Register/index.vue';

const firebaseConfig = {
  apiKey: 'AIzaSyDd48-5whljtDzU6_wt0k_WWVoAFvvMokY',
  authDomain: 'music-choice-test.firebaseapp.com',
  databaseURL: 'https://music-choice-test.firebaseio.com',
  projectId: 'music-choice-test',
  storageBucket: 'music-choice-test.appspot.com',
  messagingSenderId: '1027055558884',
  appId: '1:1027055558884:web:6fce12649e3c1336',
};
  // Initialize Firebase
initializeApp(firebaseConfig);

describe('Register.vue', () => {
  it('successfully renders the view', () => {
    const wrapper = mount(Register);
    const registerComponentWrapper = mount(RegisterComponent);
    const buttonWrapper = registerComponentWrapper.find('button');
    const inputUsernameWrapper = registerComponentWrapper.find('input[name="username"]');
    const inputEmailWrapper = registerComponentWrapper.find('input[name="email"]');
    const inputPasswordWrapper = registerComponentWrapper.find('input[name="password"]');
    expect(wrapper.find(RegisterComponent)).toBeTruthy();
    expect(buttonWrapper).toBeTruthy();
    expect(inputUsernameWrapper).toBeTruthy();
    expect(inputEmailWrapper).toBeTruthy();
    expect(inputPasswordWrapper).toBeTruthy();
    expect(registerComponentWrapper.vm.$data).toHaveProperty('email');
    expect(registerComponentWrapper.vm.$data).toHaveProperty('username');
    expect(registerComponentWrapper.vm.$data).toHaveProperty('password');
    expect(registerComponentWrapper.vm.$data).toHaveProperty('error');
    inputUsernameWrapper.setValue('change.prevent');
    inputUsernameWrapper.trigger('change.prevent');
    inputEmailWrapper.trigger('change.prevent');
    inputPasswordWrapper.trigger('change.prevent');
    registerComponentWrapper.vm.$data.submitButton = false;
    registerComponentWrapper.vm.$data.email = faker.internet.email();
    registerComponentWrapper.vm.$data.username = faker.name.findName();
    registerComponentWrapper.vm.$data.password = faker.internet.password();
    buttonWrapper.trigger('click.prevent');
  });
});
