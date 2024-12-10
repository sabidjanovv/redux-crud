import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen bg-[#caf0f8] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-[#0077b6]">404</h1>
        <h2 className="text-4xl font-semibold text-[#03045e] mt-4">
          Page Not Found
        </h2>
        <p className="text-[#023e8a] mt-2">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-[#0077b6] text-white px-6 py-3 rounded-md hover:bg-[#0096c7]"
          >
            Go to Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-[#023e8a] text-white px-6 py-3 rounded-md hover:bg-[#03045e] ml-4"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
