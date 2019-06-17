import Vuex from 'vuex';
import lolex from 'lolex';
import { createLocalVue, mount } from '@vue/test-utils';
import firebase, { initializeApp } from 'firebase';
import Dashboard from '@/views/Dashboard.vue';
import DashboardComponent from '@/components/view/Dashboard/index.vue';
import DashboardDisplayComponent from '@/components/view/Dashboard/Display/index.vue';
import DashboardSearchComponent from '@/components/view/Dashboard/Search/index.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, fab } from '@fortawesome/free-brands-svg-icons';
import { faClone, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret, faClone, fab, faGithub);
 
import store from '@/store';

const localVue = createLocalVue()
localVue.use(Vuex);
localVue.component('font-awesome-icon', FontAwesomeIcon);

const firebaseConfig = {
    apiKey: 'AIzaSyD1WEJCS23fXkXj73uY50cU5nX6iuemxTs',
    authDomain: 'get-repo.firebaseapp.com',
    databaseURL: 'https://get-repo.firebaseio.com',
    projectId: 'get-repo',
    storageBucket: 'get-repo.appspot.com',
    messagingSenderId: '827711990794',
    appId: '1:827711990794:web:14d05be7183c6882'
};

initializeApp(firebaseConfig);


const createUserWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve('result of signInWithEmailAndPassword')
});

const onAuthStateChanged = jest.fn();

describe('Dashboard.vue', () => {
  let clock = null;
  beforeEach(() => {
    clock = lolex.install();
    jest.spyOn(firebase, 'firestore').mockImplementation(() => ({
      collection: () => ({
        get: () => new Promise(resolve => resolve([
          {
            data: () => ({
              repos: [47495360, 1863329]
            })
          }
        ])),
        doc: (userId) => ({
          update: () => new Promise(resolve => resolve({})),
        })
      })
    }));

    jest.spyOn(firebase, 'auth').mockImplementation(() => ({
      currentUser: {
          uid: 'r4XDjIENbcfVn12Kr8c5sq2HdUy1',
          displayName: null,
          email: "chike.ozulumba@gmail.com",
          phoneNumber: null,
          photoUrl: null,
      },
      createUserWithEmailAndPassword,
      onAuthStateChanged,
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
  });
  it('successfully renders the view and all related components', (done) => {
    const wrapper = mount(Dashboard, {
      store, 
      localVue,
      sync: false,
    });
    const dashboardComponentWrapper = mount(DashboardComponent, {
      store, 
      localVue
    });
    const dashboardDisplayComponentWrapper = mount(DashboardDisplayComponent, {
      store, 
      localVue
    });
    expect(wrapper.find(dashboardComponentWrapper)).toBeTruthy();
    const dashboardSearchComponentWrapper = mount(DashboardSearchComponent);
    expect(wrapper.find(dashboardComponentWrapper)).toBeTruthy();
    expect(dashboardComponentWrapper.find(dashboardDisplayComponentWrapper)).toBeTruthy();
    expect(dashboardComponentWrapper.find(dashboardSearchComponentWrapper)).toBeTruthy();
    done();
  });

  it('simulate the search functionality', () => {
    const wrapper = mount(Dashboard, {
      store, 
      localVue,
    });
    const dashboardDisplayComponentWrapper = mount(DashboardDisplayComponent, {
      store, 
      localVue
    });
    const dashboardSearchComponentWrapper = mount(DashboardSearchComponent, {
      store, 
      localVue
    });
    const searchField = dashboardSearchComponentWrapper.find('input[type="text"]');

    expect(searchField.attributes().name).toBe('search-component');
    dashboardSearchComponentWrapper.setData({ searchString: 'golang' });
    expect(dashboardSearchComponentWrapper.vm.searchString).toBe('golang');
    searchField.trigger('keydown');
    searchField.trigger('keydown');
    searchField.trigger('keydown');
    searchField.trigger('keydown');
    searchField.trigger('keydown');
    clock.tick(2000);
    clock.uninstall();
  });

  it('simulate the display functionality', () => {
    const wrapper = mount(Dashboard, {
      store, 
      localVue
    });
    const dashboardDisplayComponentWrapper = mount(DashboardDisplayComponent, {
      store, 
      localVue
    });
    const addButton = dashboardDisplayComponentWrapper.findAll('.ui.basic.green.button');
    const cloneButton = dashboardDisplayComponentWrapper.findAll('.ui.basic.orange.button');
    expect(addButton.length).toBeGreaterThan(1);
    expect(cloneButton.length).toBeGreaterThan(1);
    addButton.at(0).trigger('click');
    cloneButton.at(0).trigger('click');
  });

  it('should throw errors on failed calls within the component', () => {
    const wrapper = mount(Dashboard, {
      store, 
      localVue
    });
    const dashboardDisplayComponentWrapper = mount(DashboardDisplayComponent, {
      store, 
      localVue
    });
    const addButton = dashboardDisplayComponentWrapper.findAll('.ui.basic.green.button');
    const cloneButton = dashboardDisplayComponentWrapper.findAll('.ui.basic.orange.button');
    expect(addButton.length).toBeGreaterThan(1);
    expect(cloneButton.length).toBeGreaterThan(1);
    addButton.at(0).trigger('click');
    cloneButton.at(0).trigger('click');
  });
});
