import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  // current user state
  const [currentUser, setCurrentUser] = useState(null);

  // loading state
  const [loading, setLoading] = useState(true);

  // auth providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // create user 
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // login 
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // login with google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  // login with github
  const loginWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  }

  // log out
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    }
  }, []);

  // update profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    });
  }

  // auth value
  const AuthInfo = {
    currentUser,
    loading,
    setLoading,
    createUser,
    loginUser,
    logOutUser,
    loginWithGoogle,
    loginWithGithub,
    updateUserProfile
  }

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node
};

export default AuthContextProvider;