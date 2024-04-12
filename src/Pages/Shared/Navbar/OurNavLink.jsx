import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const OurNavLink = ({ data }) => {
  return (<li>
    <NavLink
      to={data.path}
      className='btn bg-transparent px-6 py-3 min-h-0 h-auto nav-link'
    >
      {data.text}
    </NavLink>
  </li>);
};

OurNavLink.propTypes = {
  data: PropTypes.object,
};

export default OurNavLink;