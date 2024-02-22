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

// Creamos el contexto de autenticación
export const AuthContext = createContext();

// Inicializamos Firebase Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // Definimos el estado del usuario y del proceso de carga
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Función para crear una cuenta de usuario
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Función para iniciar sesión con Google
  const signUpWithGmail = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Función para iniciar sesión con teléfono
  const signUpWithPhone = () => {
    return (window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {}
    ));
  };

  // Función para iniciar sesión con usuario y contraseña
  const signUpWithUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Función para cerrar sesión
  const logOut = () => {
    signOut(auth);
  };

  // Función para actualizar el perfil del usuario
  const updateUserProfile = (name, photoURL, address, cuit, email) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
      address: address,
      cuit: cuit,
      email: email,
    });
  };

  // Efecto para comprobar el estado de autenticación del usuario
  useEffect(() => {
    // Suscribimos un listener para el cambio de estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Si hay un usuario autenticado
      if (currentUser) {
        // Actualizamos el estado del usuario y finalizamos la carga
        setUser(currentUser);
        setLoading(false);
        //console.log("User signed in:", currentUser);
      } else {
        // Si no hay un usuario autenticado, dejamos el estado de carga en true
        setLoading(false);
        //console.log("User signed out");
      }
      //console.log("Loading:", loading);
    });
    // Devolvemos la función de limpieza para evitar fugas de memoria
    //console.log("onAuthStateChanged unsubscribed");
    return () => unsubscribe();
  }, [loading]);

  // Objeto con la información de autenticación y funciones relacionadas
  const authInfo = {
    user,
    createUser,
    signUpWithGmail,
    signUpWithPhone,
    signUpWithUser,
    updateUserProfile,
    logOut,
    loading,
  };

  // Renderizamos el proveedor de contexto con su valor y los componentes hijos
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
