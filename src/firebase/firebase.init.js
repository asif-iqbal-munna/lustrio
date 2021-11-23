import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitialize = () => {
  return initializeApp(firebaseConfig);
};

export default firebaseInitialize;
