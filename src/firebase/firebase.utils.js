import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log('userAuth', userAuth);
  console.log('additionalData', additionalData);

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
