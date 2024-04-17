import { Helmet } from "react-helmet-async";

const Support = () => {
  return (
    <div className="max-w-md mx-auto">

      <Helmet>
        <title>Student Lodge | Support</title>
      </Helmet>

      <h2 data-aos="fade-down" data-aos-duration="1000" className="text-2xl md:text-3xl font-semibold text-center my-2 md:my-4">Post your question</h2>

      <form>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Write your question</span>
          </div>
          <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
          <div className="label">
          </div>
        </label>

        {/* submit */}
        <input type="submit" value="Post(disabled)" className="btn bg-royal-blue text-white w-full mt-3 hover:bg-royal-blue-dark" disabled/>
      </form>

    </div>
  );
};

export default Support;