import React, { useEffect, useState } from 'react';
import DeveloperCard from '../components/DeveloperCard';

function AllDevelopers() {
  const [devs, setDevs] = useState([]);
  const [search, setSearch] = useState('');

  // Load developers from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('developers');
    if (saved) {
      setDevs(JSON.parse(saved));
    }
  }, []);

  // Filter developers by search term (name or skill)
  const filteredDevs = devs.filter((dev) =>
    dev.name.toLowerCase().includes(search.toLowerCase()) ||
    dev.skills.some((skill) =>
      skill.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="pt-20 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">All Developers</h2>

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search by name or skill..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mx-auto block border px-4 py-2 rounded-md mb-6 bg-white dark:bg-gray-700 dark:text-white"
      />

      {/* 🔁 Developer Grid */}
      {filteredDevs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredDevs.map((dev) => (
            <DeveloperCard key={dev.id} dev={dev} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No developers found.</p>
      )}
    </div>
  );
}

export default AllDevelopers;
