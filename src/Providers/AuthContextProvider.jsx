import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
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

  // observer
  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
  });

  // auth value
  const AuthInfo = {
    currentUser,
    createUser,
    loginUser
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