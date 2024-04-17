import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthContextProvider";
import { Helmet } from "react-helmet-async";
import { toast } from 'react-toastify';

const Login = () => {
  // auth context data 
  const { setLoading, loginUser, loginWithGoogle, loginWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();

  // react hook form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // login handler
  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;

    // login user
    loginUser(email, password)
      .then(() => {
        toast('Successfully logged in');
        navigate('/');
      })
      .catch(() => {
        setLoading(false);
        toast('An unexpected error occurred!');
      });
  }

  // login with google handler
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        navigate('/');
      })
      .catch()
  }

  // login with google handler
  const handleGithubLogin = () => {
    loginWithGithub()
      .then(() => {
        navigate('/');
      })
      .catch()
  }

  return (
    <div className="max-w-md mx-auto">

      <Helmet>
        <title>Student Lodge | Login</title>
      </Helmet>

      <h2 className="text-3xl font-semibold text-center my-4">Login</h2>

      {/* login form */}
      <form onSubmit={handleSubmit(handleLogin)}>
        {/* email */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Email</span>
          </div>
          <input
            {...register('email', {
              required: 'Provide your email'
            })}
            type="email" placeholder="example@email.com" className="input input-bordered w-full" />
        </label>
        {errors.email && (<small className="text-error">{errors.email.message}</small>)}

        {/* password */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Password</span>
          </div>
          <input
            {...register('password', {
              required: 'Provide your password'
            })}
            type="password" placeholder="Your password" className="input input-bordered w-full" />
        </label>
        {errors.password && (<small className="text-error">{errors.password.message}</small>)}

        {/* form submit button */}
        <input type="submit" value="Login" className="btn bg-royal-blue text-white w-full mt-3 hover:bg-royal-blue-dark" />
      </form>

      {/* redirect to register */}
      <p className="mt-4">Don&#39;t have an account? Please <Link className="underline text-royal-blue" to={'/register'}>Register</Link></p>

      <div className="divider">Or</div>

      {/* social login options */}
      <button onClick={handleGoogleLogin} className="btn w-full border border-royal-blue text-royal-blue hover:border-royal-blue-dark hover:bg-royal-blue hover:text-white">
        <FaGoogle className="text-xl" />
        Login with Google
      </button>
      <button onClick={handleGithubLogin} className="btn w-full border border-royal-blue text-royal-blue hover:border-royal-blue-dark hover:bg-royal-blue hover:text-white mt-3">
        <FaGithub className="text-xl" />
        Login with Github
      </button>
    </div>
  );
};

export default Login;