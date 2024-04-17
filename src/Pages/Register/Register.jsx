import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthContextProvider";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  // auth context data 
  const { createUser, setLoading, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  // react hook form 
  const { register, handleSubmit, formState: { errors } } = useForm();

  // register handler
  const handleRegister = (data) => {
    const name = data.name;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;

    // create user
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            toast('Registration successful!');
            navigate('/');
          })
          .catch();
      })
      .catch(() => {
        toast('An unexpected error occurred!');
        setLoading(false);
      });
  }

  return (
    <div className="max-w-md mx-auto">

      <Helmet>
        <title>Student Lodge | Register</title>
      </Helmet>

      <h2 className="text-3xl font-semibold text-center my-4">Register</h2>

      {/* register form */}
      <form onSubmit={handleSubmit(handleRegister)}>
        {/* name */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Name</span>
          </div>
          <input
            {...register('name')}
            type="text"
            placeholder="Your name"
            className="input input-bordered w-full"
          />
        </label>

        {/* photo url */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Photo Url</span>
          </div>
          <input
            {...register('photo')}
            type="text"
            placeholder="Paste your photo url"
            className="input input-bordered w-full" />
        </label>

        {/* email */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Email</span>
          </div>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please provide a valid email'
              }
            })}
            type="email"
            placeholder="example@email.com"
            className="input input-bordered w-full" />
        </label>
        {errors.email && (<small className="text-error">{errors.email.message}</small>)}

        {/* password */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Password</span>
          </div>
          <div className="relative">
            <input
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                  message: 'Password must contain an uppercase letter, lowercase letter and 6 characters'
                }
              })}
              type={
                showPassword ?
                  'text' :
                  'password'
              }
              placeholder="Your password"
              className="input input-bordered w-full" />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2" >
              {
                showPassword ?
                  <FaEye /> :
                  <FaEyeSlash />
              }
            </span>
          </div>
        </label>
        {errors.password && (<small className="text-error">{errors.password.message}</small>)}

        {/* form submit button */}
        <input
          type="submit"
          value="Register"
          className="btn bg-royal-blue text-white w-full mt-3 hover:bg-royal-blue-dark" />
      </form>

      {/* redirect to register */}
      <p className="mt-4">Already have an account? Please <Link className="underline text-royal-blue" to={'/login'}>Login</Link></p>
    </div>
  );
};

export default Register;