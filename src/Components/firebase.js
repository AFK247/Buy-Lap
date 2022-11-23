import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
  // apiKey: "AIzaSyB7fR1fOug8foEJusrxqCXV7yvrw6zNQgg",
  // authDomain: "buy-lap.firebaseapp.com",
  // projectId: "buy-lap",
  // storageBucket: "buy-lap.appspot.com",
  // messagingSenderId: "107008458930",
  // appId: "1:107008458930:web:d575e4b7c858919cfe09ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;