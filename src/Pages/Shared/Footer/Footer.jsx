import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto px-3">
      <footer className="footer footer-center p-5 md:p-8 lg:p-16 rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link className="link link-hover" to={'/'}>Home</Link>
          <Link className="link link-hover" to={'/update_profile'}>Update Profile</Link>
          <Link className="link link-hover" to={'/login'}>Login</Link>
          <Link className="link link-hover" to={'/register'}>Register</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a><FaFacebookF className="text-xl cursor-pointer" /></a>
            <a><FaInstagram className="text-xl cursor-pointer" /></a>
            <a><FaTwitter className="text-xl cursor-pointer" /></a>
            <a><FaGithub className="text-xl cursor-pointer" /></a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;