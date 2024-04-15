import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useState } from "react";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  // current user state
  const [currentUser, setCurrentUser] = useState(null);

  // create user 
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // login 
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // log out
  const logOutUser = () => {
    return signOut(auth);
  }

  // observer
  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
    console.log(user);
  });

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
    createUser,
    loginUser,
    logOutUser,
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