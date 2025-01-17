import { Link, NavLink } from "react-router-dom";
import OurNavLink from "./OurNavLink";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthContextProvider";

const Navbar = () => {
  // current user data 
  const { currentUser, logOutUser } = useContext(AuthContext);

  // log out handler
  const handleLogOut = () => {
    logOutUser()
      .then()
      .catch()
  }

  // data for nab item
  const navLinksData = [
    { path: '/', text: 'Home' },
  ];

  // adding update profile path conditionality
  currentUser && navLinksData.push({ path: '/update_profile', text: 'Update Profile' });
  currentUser && navLinksData.push({ path: '/support', text: 'Support' });

  // render all nav items
  const navLinkItems = <>
    {
      navLinksData.map((data, idx) => <OurNavLink key={idx} data={data} />)
    }
  </>

  return (
    <header>
      <nav className="z-50">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden z-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-base-100 rounded-box w-52">
                {navLinkItems}
              </ul>
            </div>
            <Link className="btn btn-ghost text-lg sm:text-xl" to={'/'}>Student Lodge</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-1 gap-2 font-medium">
              {navLinkItems}
            </ul>
          </div>
          <div className="navbar-end gap-2">
            {
              currentUser ?
                <>
                  <div className="tooltip tooltip-left" data-tip={
                    currentUser?.displayName ?
                      currentUser.displayName :
                      'Not Provided'
                  }>
                    <button className=" bg-royal-blue border-4 border-royal-blue rounded-full overflow-hidden">
                      {
                        currentUser?.photoURL ?
                          <img className="size-10" src={currentUser.photoURL} alt='Profile Picture' /> :
                          <FaRegUserCircle className="text-2xl text-white" />
                      }
                    </button>
                  </div>
                  {/* log out btn */}
                  <button onClick={handleLogOut} className="btn bg-transparent px-2 md:px-6 py-3 min-h-0 h-auto border-2 border-transparent hover:bg-transparent hover:text-royal-blue hover:border-2 hover:border-royal-blue">Logout</button>
                </> :
                <>
                  {/* send to login page */}
                  <NavLink className="btn px-2 md:px-6 py-3 min-h-0 h-auto bg-royal-blue text-white border-2 border-transparent hover:bg-[#2E4F8B] hover:border-transparent" to={'/login'}>Login</NavLink>
                </>
            }
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;