import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDCWjAzHmLc2CYmfdmAAtqVL9AwgQ0H-HU",
    authDomain: "crown-clothing-d97ca.firebaseapp.com",
    databaseURL: "https://crown-clothing-d97ca.firebaseio.com",
    projectId: "crown-clothing-d97ca",
    storageBucket: "crown-clothing-d97ca.appspot.com",
    messagingSenderId: "657866711725",
    appId: "1:657866711725:web:fdd46052daa95f894b9c24",
    measurementId: "G-K1Z870166R"
  };

    firebase.initializeApp(config);



 export const createUserProfileDocument = async (userAuth, additionalData)=> {
        
        if(!userAuth) return; 

        const userRef = firestore.doc(`users/${userAuth.uid}`); 

        const snapShot = await userRef.get();

        if(!snapShot.exists){
        	const {displayName, email} = userAuth;
        	const createdAt = new Date();

        	try{

        		await userRef.set({
        			displayName,
        			email,
        			createdAt,
        			...additionalData
        		});

        	}catch(error){
        		console.log('error creating user', error.message);
         }
      }
                 return userRef;
 };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;

