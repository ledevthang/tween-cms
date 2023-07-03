import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAqd6MEXoObA3FNZMQtzbmDE1Tv5CSU86A',
  authDomain: 'tween-cms.vercel.app',
  databaseURL: 'https://tweencms.firebaseio.com',
  projectId: 'tweencms',
  storageBucket: 'tweencms.appspot.com',
  messagingSenderId: '200070492372',
  appId: '1:200070492372:web:fb5c59ba5716980af48b41',
  measurementId: 'G-FP7V2YKNR4',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export {
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
};
