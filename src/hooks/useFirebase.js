import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import firebaseInitialize from "../firebase/firebase.init";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  const registerUser = (name, email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Swal.fire({
          icon: "success",
          title: "Yoo!",
          text: "You Have Successfully Registered",
          confirmButtonText: "Cool",
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: errorMessage,
          confirmButtonText: "Try Again",
        });
      })
      .finally(() => setLoading(false));
  };

  const loginUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
          icon: "success",
          title: "Yoo!",
          text: "You Have Successfully Logged In",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: errorMessage,
          confirmButtonText: "Try Again",
        });
      })
      .finally(() => setLoading(false));
  };

  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return {
    registerUser,
    loginUser,
    googleSignIn,
    user,
    logOut,
    error,
    loading,
  };
};

export default useFirebase;
