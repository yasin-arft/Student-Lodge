import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext } from "react";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  // create user 
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // login 
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  // auth value
  const AuthInfo = {
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