import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";
const useFirebase = () => {
  const { user, setUser } = useState("");
  const { error, setError } = useState("");

  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {})
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return {
    user,
    error,
    googleSignIn,
  };
};

export default useFirebase;
