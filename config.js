import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCU3R4sVUmAgs1rsuKMQH2zlKmGlDMgn7A",
    authDomain: "timer-933a5.firebaseapp.com",
    projectId: "timer-933a5",
    storageBucket: "timer-933a5.appspot.com",
    messagingSenderId: "407606211014",
    appId: "1:407606211014:web:7ae0ed84bb7451d14bc2c7"
  };
if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };