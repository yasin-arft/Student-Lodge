import PropTypes from 'prop-types';
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const AuthInfo = {}

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