/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Crear Cuenta
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Ingresar con gmail
  const signUpWithGmail = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //Ingresar con Telefono
  const signUpWithPhone = () => {
    return (window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {}
    ));
  };

  //Ingresar con usuario y contraseña
  const signUpWithUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Cerrar sesión

  const logOut = () => {
    signOut(auth);
  };

  //Actualizar Perfil
  const updateUserProfile = (name, photoURL, address, cuit, email) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
      address: address,
      cuit: cuit,
      email: email,
    });
  };

  //corroborar ingreso de usuarios
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        // User is signed out
        // ...
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signUpWithGmail,
    signUpWithPhone,
    signUpWithUser,
    updateUserProfile,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
