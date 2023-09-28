import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpiscXs7UomLcbyhm4Lq8rdp6zUoGiy-s",
  authDomain: "watch-it-be.firebaseapp.com",
  projectId: "watch-it-be",
  storageBucket: "watch-it-be.appspot.com",
  messagingSenderId: "241617376848",
  appId: "1:241617376848:web:5c5ec7579fc6567bed6355",
  measurementId: "G-841E4LK74N",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
