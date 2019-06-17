import firebase from 'firebase';
import lolex from 'lolex';
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

jest.spyOn(firebase, 'auth').mockImplementation(() => ({
  signInWithEmailAndPassword: (email, password) => new Promise(resolve => ({
    user: {
      providerData: [{
          uid: 'r4XDjIENbcfVn12Kr8c5sq2HdUy1',
          displayName: null,
          email: "chike.ozulumba@gmail.com",
          phoneNumber: null,
          photoUrl: null,
      }]
    }
  }))
}));

describe('Login.vue', () => {
  let clock = null;
  beforeEach(() => {
    clock = lolex.install();
    clock.tick(2000);
  });
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

    firebase.auth()
      .signInWithEmailAndPassword('this.email', 'this.password')
      .then((res) => {
        console.log(res);
        const userData = res.user.providerData[0];
        // localStorage.setItem('mc-auth', JSON.stringify(userData));
        // this.error = null;
        // this.$router.push({ name: 'dashboard' });
        // return res;
      })
      .catch((error) => {
        this.error = error.message;
      });
  });
});
