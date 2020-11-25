




// import { createStore, applyMiddleware, compose } from 'redux'
// // import rootReducer from './reducers'
// import thunk from 'redux-thunk';
// import rootReducer from './reducers'; 
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import fbConfig from './config/fbConfig'

// const store = createStore(rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//     reactReduxFirebase(fbConfig,  {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}), // redux binding for firebase
//     reduxFirestore(fbConfig), // redux bindings for firestore
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// export default store;


















// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore' // <- needed if using firestore
// // import 'firebase/functions' // <- needed if using httpsCallable
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createStore, combineReducers, compose } from 'redux'
// import {
//   ReactReduxFirebaseProvider,
//   firebaseReducer
// } from 'react-redux-firebase'

// import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
 
// const fbConfig = {
    // apiKey: "AIzaSyCSIOUw0rJqyL5cBzc9vZCebtLX6M26gfo",
    // authDomain: "toofan-731e7.firebaseapp.com",
    // databaseURL: "https://toofan-731e7.firebaseio.com",
    // projectId: "toofan-731e7",
    // storageBucket: "toofan-731e7.appspot.com",
    // messagingSenderId: "846269514144",
    
// }
 
// // react-redux-firebase config
// const rrfConfig = {
//   userProfile: 'users',
//   useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
// }
 
// // Initialize firebase instance
// firebase.initializeApp(fbConfig)
 
// // Initialize other services on firebase instance
// firebase.firestore() // <- needed if using firestore
// // firebase.functions() // <- needed if using httpsCallable
 
// // Add firebase to reducers
// const rootReducer = combineReducers({
//   firebase: firebaseReducer,
//   firestore: firestoreReducer // <- needed if using firestore
// })
 
// // Create store with reducers and initial state
// const initialState = {}
// const store = createStore(rootReducer, initialState, composeWithDevTools())
 
// export const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
// //   createFirestoreInstance // <- needed if using firestore
// }
 





// export default store;



































import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore

import { createFirestoreInstance } from "redux-firestore"; // <- needed if using firestore

const fbConfig = {
// PUT YOUR FIREBASE CONFIGURATION HERE
apiKey: "AIzaSyCSIOUw0rJqyL5cBzc9vZCebtLX6M26gfo",
authDomain: "toofan-731e7.firebaseapp.com",
databaseURL: "https://toofan-731e7.firebaseio.com",
projectId: "toofan-731e7",
storageBucket: "toofan-731e7.appspot.com",
messagingSenderId: "846269514144",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

const store = createStore(rootReducer, composeWithDevTools());

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;