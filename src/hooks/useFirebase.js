import axios from "axios";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
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

  const registerUser = (name, email, password, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        saveUser(email, name, "post");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        Swal.fire({
          icon: "success",
          title: "Yoo!",
          text: "You Have Successfully Registered",
          confirmButtonText: "Cool",
        });
        navigate("/");
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

  const loginUser = (email, password, location, navigate) => {
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
        const redirectURI = location.state?.from || "/";
        navigate(redirectURI);
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
  const googleSignIn = (location, navigate) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "put");
        setError("");
        Swal.fire({
          icon: "success",
          title: "Yoo!",
          text: "You Have Successfully Logged In",
          confirmButtonText: "Ok",
        });
        const redirectURI = location.state?.from || "/";
        navigate(redirectURI);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: errorMessage,
          confirmButtonText: "Try Again",
        });
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
    setLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setLoading(false));
  };

  const saveUser = (email, displayName, method) => {
    axios({
      method: method,
      url: "http://localhost:8000/users",
      data: {
        email,
        displayName,
      },
    }).then();
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
