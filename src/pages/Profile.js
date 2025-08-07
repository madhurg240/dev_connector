import { useParams, Link } from 'react-router-dom';
import developers from '../data/developers';

function Profile() {
  const { id } = useParams();
  const dev = developers.find((d) => d.id === parseInt(id));

  if (!dev) {
    return (
      <div className="text-center mt-20 text-red-600 text-lg">
        Developer not found. <Link to="/developers" className="underline text-blue-600">Go back</Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-2">{dev.name}</h2>
        <p className="text-gray-600 mb-4">{dev.role}</p>

        <h4 className="font-semibold mb-1">Skills:</h4>
        <ul className="flex flex-wrap gap-2 mb-4">
          {dev.skills.map((skill, idx) => (
            <li key={idx} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {skill}
            </li>
          ))}
        </ul>

        <Link to="/developers" className="text-blue-600 hover:underline text-sm">
          ← Back to all developers
        </Link>
      </div>
    </div>
  );
}

export default Profile;
