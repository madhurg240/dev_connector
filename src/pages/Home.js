import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center px-4">
      <div className="max-w-2xl">
        

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Welcome to DevConnector
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          A simple portal to find and showcase developers.
        </p>
        <Link
          to="/developers"
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition"
        >
          View Developers
        </Link>
      </div>
    </div>
  );
}

export default Home;
