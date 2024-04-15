import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // register handler
  const handleRegister = (data) => {
    console.log(data);
  }

  return (
    <div className="max-w-md mx-auto">
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
            {...register('photoUrl')}
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
            type="text"
            placeholder="example@email.com"
            className="input input-bordered w-full" />
        </label>
        {errors.email && (<small className="text-error">{errors.email.message}</small>)}

        {/* password */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Password</span>
          </div>
          <input
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                message: 'Password must contain an uppercase letter, lowercase letter and 6 characters'
              }
            })}
            type="text"
            placeholder="Your password"
            className="input input-bordered w-full" />
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