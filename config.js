import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';


const firebaseConfig = {
    
  };
if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
