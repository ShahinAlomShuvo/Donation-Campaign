import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='grid justify-items-center place-items-center h-[70vh]'>
      <div className='text-center '>
        <h2 className='text-xl font-bold pb-4'>Oops! Something went wrong</h2>
        <Link className='btn btn-warning' to={"/"}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
