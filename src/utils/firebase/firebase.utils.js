import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbzXsaCBmrYMEP79Nt7u5QGfpv2iiSvEI",
  authDomain: "daily-rethreads.firebaseapp.com",
  projectId: "daily-rethreads",
  storageBucket: "daily-rethreads.appspot.com",
  messagingSenderId: "873289999576",
  appId: "1:873289999576:web:bacc1e3731b7d9e05563ad"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                email,
                createdAt,
                displayName,
            });
        } catch (error) {
            console.log('error creating a user ', error.message);
        }
    }

    return userDocRef;
};