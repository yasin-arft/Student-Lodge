import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthContextProvider";

const UpdateProfile = () => {
  // auth context data 
  const { currentUser, setLoading, updateUserProfile } = useContext(AuthContext);

  // react hook form 
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: currentUser.displayName,
      photo: currentUser.photoURL,
      email: currentUser.email
    }
  });

  // update profile handler 
  const handleUpdateProfile = (data) => {
    setLoading(true);
    const name = data.name;
    const photo = data.photo;

    updateUserProfile(name, photo)
      .then(() => {
        setLoading(false);
      })
      .catch();
  }
  return (
    <div className="max-w-md mx-auto">
      <Helmet>
        <title>Student Lodge | Update </title>
      </Helmet>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
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
            {...register('email')}
            type="email"
            placeholder="example@email.com"
            className="input input-bordered w-full"
            readOnly />
        </label>

        {/* form submit button */}
        <input
          type="submit"
          value="Update"
          className="btn bg-royal-blue text-white w-full mt-3 hover:bg-royal-blue-dark" />
      </form>
    </div>
  );
};

export default UpdateProfile;