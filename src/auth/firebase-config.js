import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAItLS6TtjyjOFaX_eJ51oCij16aM9nKE",
  authDomain: "react-movie-app-8b2b4.firebaseapp.com",
  projectId: "react-movie-app-8b2b4",
  storageBucket: "react-movie-app-8b2b4.appspot.com",
  messagingSenderId: "485308823911",
  appId: "1:485308823911:web:b22c45d23315e5d0abd7c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
