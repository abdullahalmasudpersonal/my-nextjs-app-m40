"use client";

const ErrorPage = ({ error, reset }) => {
  console.log(error);
  return (
    <div>
      <h1 className="text-center text-2xl text-red-500">
        Somthing went wrong!!!
      </h1>
      <h1 className="text-center text-2xl text-red-500">{error.message}</h1>
      <button onClick={() => reset()}>Try agarin</button>
    </div>
  );
};

export default ErrorPage;
