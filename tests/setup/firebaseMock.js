import firebasemock from 'firebase-mock';

const mockdatabase = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
const mockstorage = new firebasemock.MockStorage();
const mockmessaging = new firebasemock.MockMessaging();


const createUserWithEmailAndPassword = (email, password) => new Promise(resolve => ({
  user: {
    providerData: [{
        uid: 'r4XDjIENbcfVn12Kr8c5sq2HdUy1',
        displayName: null,
        email: "chike.ozulumba@gmail.com",
        phoneNumber: null,
        photoUrl: null,
    }]
  }
}));

const signInWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve('result of signInWithEmailAndPassword')
});

const onAuthStateChanged = jest.fn();

const mocksdk = new firebasemock.MockFirebaseSdk(
  null,
  () => ({
      currentUser: {
          uid: 'r4XDjIENbcfVn12Kr8c5sq2HdUy1',
          displayName: null,
          email: "chike.ozulumba@gmail.com",
          phoneNumber: null,
          photoUrl: null,
      },
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      onAuthStateChanged,
  }),
  () => {
    return mockfirestore;
  },
  // use null if your code does not use STORAGE
  () => {
    return mockstorage;
  },
  // use null if your code does not use MESSAGING
  () => {
    return mockmessaging;
  }
);

jest.mock('firebase', () => mocksdk);