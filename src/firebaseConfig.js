import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Firestore init
const firebaseConfig = {
    apiKey: 'AIzaSyDjur2rKUdW_PIQWCIvNKMN--UpELLAF7Y',
    authDomain: 'odin-where-s-waldo-e6277.firebaseapp.com',
    projectId: 'odin-where-s-waldo-e6277',
    storageBucket: 'odin-where-s-waldo-e6277.appspot.com',
    messagingSenderId: '858570294809',
    appId: '1:858570294809:web:993855dbd5a4e4b4174c88'
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const colRef = collection(db, 'leaderboard');

getDocs(colRef).then((snapshot) => {
    console.log(snapshot.docs);
});