import { Link } from 'react-router-dom';

function DeveloperCard({ dev }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md text-center">
      {/* Profile Picture */}
      {dev.profilePic && (
        <img
          src={dev.profilePic}
          alt={dev.name}
          className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
        />
      )}

      {/* Developer Info */}
      <h3 className="text-xl font-semibold">{dev.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{dev.role}</p>
      <p className="mt-2 text-sm">
        <strong>Skills:</strong> {dev.skills.join(', ')}
      </p>

      {/* View Profile Link */}
      <Link
        to={`/profile/${dev.id}`}
        className="text-blue-600 hover:underline text-sm mt-2 inline-block"
      >
        View Profile
      </Link>
    </div>
  );
}

export default DeveloperCard;
