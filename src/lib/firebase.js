import firebase from 'firebase';

const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyD1WEJCS23fXkXj73uY50cU5nX6iuemxTs',
    authDomain: 'get-repo.firebaseapp.com',
    databaseURL: 'https://get-repo.firebaseio.com',
    projectId: 'get-repo',
    storageBucket: 'get-repo.appspot.com',
    messagingSenderId: '827711990794',
    appId: '1:827711990794:web:14d05be7183c6882'
};

export default () => firebase.initializeApp(FIREBASE_CONFIG);