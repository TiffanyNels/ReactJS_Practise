// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXIHjTv1TPfyH_mBnIlLKPA-s026LdXk8",
  authDomain: "mock-social-media-a56fa.firebaseapp.com",
  projectId: "mock-social-media-a56fa",
  storageBucket: "mock-social-media-a56fa.appspot.com",
  messagingSenderId: "655330244325",
  appId: "1:655330244325:web:b914798926f160ac1bc60c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();