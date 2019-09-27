import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC5zT7c_5DeAC1HnKpP321tGi0pquC0mgE",
    authDomain: "crwn-db-aba79.firebaseapp.com",
    databaseURL: "https://crwn-db-aba79.firebaseio.com",
    projectId: "crwn-db-aba79",
    storageBucket: "",
    messagingSenderId: "310091111489",
    appId: "1:310091111489:web:0349755d5ac14e4baefac0"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    
    if(!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        })
      }catch(error){
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const singInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;



  
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
  
// const config = {
//       apiKey: "AIzaSyC5zT7c_5DeAC1HnKpP321tGi0pquC0mgE",
//       authDomain: "crwn-db-aba79.firebaseapp.com",
//       databaseURL: "https://crwn-db-aba79.firebaseio.com",
//       projectId: "crwn-db-aba79",
//       storageBucket: "",
//       messagingSenderId: "310091111489",
//       appId: "1:310091111489:web:0349755d5ac14e4baefac0"
//     };
//     firebase.initializeApp(config);
//     export const auth = firebase.auth();
//     export const firestore = firebase.firestore();

//     const provider = new firebase.auth.GoogleAuthProvider();
//     provider.setCustomParameters({ prompt: 'select_account' });
//     export const singInWithGoogle = () => auth.signInWithPopup(provider);

//     export default firebase;