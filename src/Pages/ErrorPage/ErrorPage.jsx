import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <h3 className="text-2xl font-semibold">Oops!!!</h3>
      <h2 className="text-4xl font-bold">{error.status}</h2>
      <p>{error.message || error.statusText}</p>
      <button onClick={() => navigate(-1)} className="btn bg-royal-blue text-white hover:bg-royal-blue-dark">Go Back</button>
    </div>
  );
};

export default ErrorPage;