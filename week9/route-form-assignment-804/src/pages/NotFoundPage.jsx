import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className=" w-[20%] bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-red-500">404 - Page Not Found</h1>
        <p className="text-gray-600 mt-2">Oops! The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
