import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthContextProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return children
  }

  return (<Navigate to={'/login'} />);
};

PrivateRoute.propTypes = {
  children: PropTypes.node
};

export default PrivateRoute;