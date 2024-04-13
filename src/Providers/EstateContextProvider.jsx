import PropTypes from 'prop-types';
import { createContext } from "react";

export const EstateContext = createContext(null);

const EstateContextProvider = ({value, children}) => {
  return (
    <EstateContext.Provider value={value}>
      {children}
    </EstateContext.Provider>
  );
};

EstateContextProvider.propTypes = {
  value: PropTypes.array,
  children: PropTypes.node
};

export default EstateContextProvider;