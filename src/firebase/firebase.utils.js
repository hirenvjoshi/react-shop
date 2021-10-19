import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBkyzV3-_vswC_oH4gaEa_l7R7dNiG1A-A",
    authDomain: "react-shop-db-2cdd2.firebaseapp.com",
    projectId: "react-shop-db-2cdd2",
    storageBucket: "react-shop-db-2cdd2.appspot.com",
    messagingSenderId: "366865806802",
    appId: "1:366865806802:web:39172a1e79a333776e440b"
};

//Take the user object web got back from our authenticatin library and store inside our database
//This is an async function because we are making an API request
//We will pass the authenticated user object and additional data (sign up form)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    //Return if we do not get back the object UserAuth
    if (!userAuth)  {
        return;
    }
    
    //Query inside our firestore for the document or collection to see if it already exists    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();    

    //Check if data exists or not
    if (!snapShot.exists) {
        //What we want to store from our userAuth and any additional data 
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            //Save the data into firebase database
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log(error);
        }        
    }

    //Return the userRef object if we can to do any other action on that
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;