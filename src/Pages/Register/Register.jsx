import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-semibold text-center my-4">Register</h2>

      {/* login form */}
      <form>
        {/* name */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Name</span>
          </div>
          <input type="text" placeholder="Your name" className="input input-bordered w-full" />
        </label>
        {/* photo url */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Photo Url</span>
          </div>
          <input type="text" placeholder="Paste your photo url" className="input input-bordered w-full" />
        </label>
        {/* email */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Email</span>
          </div>
          <input type="text" placeholder="example@email.com" className="input input-bordered w-full" />
        </label>
        {/* password */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Password</span>
          </div>
          <input type="text" placeholder="Your password" className="input input-bordered w-full" />
        </label>
        {/* form submit button */}
        <input type="submit" value="Register" className="btn bg-royal-blue text-white w-full mt-3 hover:bg-royal-blue-dark" />
      </form>

      {/* redirect to register */}
      <p className="mt-4">Already have an account? Please <Link className="underline text-royal-blue" to={'/login'}>Login</Link></p>
    </div>
  );
};

export default Register;