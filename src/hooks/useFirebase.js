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
  getIdToken,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import firebaseInitialize from "../firebase/firebase.init";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const auth = getAuth();

  const registerUser = (name, email, password, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        saveUser(email, name, "post");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
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
        getIdToken(user).then((idToken) => setToken(idToken));
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

  useEffect(() => {
    axios
      .get(`https://tranquil-cove-40150.herokuapp.com/users/${user.email}`)
      .then((res) => setAdmin(res.data.admin));
  }, [user.email]);

  const saveUser = (email, displayName, method) => {
    axios({
      method: method,
      url: "https://tranquil-cove-40150.herokuapp.com/users",
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
    token,
    loading,
    admin,
  };
};

export default useFirebase;
