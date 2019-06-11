import faker from 'faker';
import { mount } from '@vue/test-utils';
import { initializeApp } from 'firebase';
import Login from '@/views/Login.vue';
import LoginComponent from '@/components/view/Login/index.vue';

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

describe('Login.vue', () => {
  it('successfully renders the view', () => {
    const wrapper = mount(Login);
    const loginComponentWrapper = mount(LoginComponent);
    const buttonWrapper = loginComponentWrapper.find('button');
    const inputEmailWrapper = loginComponentWrapper.find('input[name="email"]');
    const inputPasswordWrapper = loginComponentWrapper.find('input[name="password"]');
    expect(wrapper.find(LoginComponent)).toBeTruthy();
    expect(buttonWrapper).toBeTruthy();
    expect(inputEmailWrapper).toBeTruthy();
    expect(inputPasswordWrapper).toBeTruthy();
    expect(loginComponentWrapper.vm.$data).toHaveProperty('email');
    expect(loginComponentWrapper.vm.$data).toHaveProperty('password');
    expect(loginComponentWrapper.vm.$data).toHaveProperty('error');
    inputEmailWrapper.trigger('change.prevent');
    inputPasswordWrapper.trigger('change.prevent');
    loginComponentWrapper.vm.$data.submitButton = false;
    loginComponentWrapper.vm.$data.email = faker.internet.email();
    loginComponentWrapper.vm.$data.username = faker.name.findName();
    loginComponentWrapper.vm.$data.password = faker.internet.password();
    buttonWrapper.trigger('click.prevent');
  });
});
