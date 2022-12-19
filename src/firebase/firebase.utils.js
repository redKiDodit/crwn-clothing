import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAT9JfO1Nk-C3ro-PKHKFWTO-XE1w8qWAY',
  authDomain: 'crwn-db-125eb.firebaseapp.com',
  projectId: 'crwn-db-125eb',
  storageBucket: 'crwn-db-125eb.appspot.com',
  messagingSenderId: '634162694916',
  appId: '1:634162694916:web:6367359dca5329d9a65e51',
  measurementId: 'G-TK5CZ5DT2V'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
