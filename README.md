Create firebase 

firebase.js

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore()

    const auth = firebase.auth()

    const provider = new firebase.auth.GoogleAuthProvider()

    const storage = firebase.storage()

    export { auth , provider, storage, firebaseConfig}

    export default db

Import data to firebase/firestore

import.js:

    const jsonToFirestore = async () => {

    try {

        console.log('Initialzing Firebase');

        await firestoreService.initializeApp(serviceAccount,
        firebaseConfig.databaseURL);


        console.log('Firebase Initialized');

        await firestoreService.restore('./moviesDetails.json');

        console.log('Upload Success');
    }

    catch (error) {

        console.log(error);

    }
    
    };

    jsonToFirestore();