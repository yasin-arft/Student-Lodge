import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthContextProvider";

const Login = () => {
  // auth context data 
  const { loginUser } = useContext(AuthContext);

  // react hook form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // login handler
  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;

    // login user
    loginUser(email, password)
    .then(user => {
      console.log(user);
    })
    .catch(error => console.log(error));
  }

  return (
    <div className="max-w-md mx-auto">
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
            type="text" placeholder="example@email.com" className="input input-bordered w-full" />
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
            type="text" placeholder="Your password" className="input input-bordered w-full" />
        </label>
        {errors.password && (<small className="text-error">{errors.password.message}</small>)}

        {/* form submit button */}
        <input type="submit" value="Login" className="btn bg-royal-blue text-white w-full mt-3 hover:bg-royal-blue-dark" />
      </form>

      {/* redirect to register */}
      <p className="mt-4">Don&#39;t have an account? Please <Link className="underline text-royal-blue" to={'/register'}>Register</Link></p>

      <div className="divider">Or</div>

      {/* social login options */}
      <button className="btn w-full border border-royal-blue text-royal-blue hover:border-royal-blue-dark hover:bg-royal-blue hover:text-white">
        <FaGoogle className="text-xl" />
        Login with Google
      </button>
      <button className="btn w-full border border-royal-blue text-royal-blue hover:border-royal-blue-dark hover:bg-royal-blue hover:text-white mt-3">
        <FaGithub className="text-xl" />
        Login with Github
      </button>
    </div>
  );
};

export default Login;