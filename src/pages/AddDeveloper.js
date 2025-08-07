import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AddDeveloper() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [skills, setSkills] = useState('');
  const [bio, setBio] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [devs, setDevs] = useState([]);
  const navigate = useNavigate();

  // Load developers from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem('developers');
    if (saved) {
      setDevs(JSON.parse(saved));
    }
  }, []);

  // Handle image upload (base64)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newDev = {
      id: Date.now(),
      name,
      role,
      skills: skills.split(',').map((skill) => skill.trim()),
      bio,
      profilePic,
    };

    const updatedDevs = [...devs, newDev];
    setDevs(updatedDevs);
    localStorage.setItem('developers', JSON.stringify(updatedDevs));

    // Clear form
    setName('');
    setRole('');
    setSkills('');
    setBio('');
    setProfilePic('');

    navigate('/');
  };

  return (
    <div className="pt-20 px-4">
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Developer</h2>

        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded-md mb-4 bg-white dark:bg-gray-700 dark:text-white"
          required
        />

        <label className="block text-sm font-medium mb-1">Role</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border px-3 py-2 rounded-md mb-4 bg-white dark:bg-gray-700 dark:text-white"
          required
        />

        <label className="block text-sm font-medium mb-1">Skills (comma separated)</label>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="w-full border px-3 py-2 rounded-md mb-4 bg-white dark:bg-gray-700 dark:text-white"
          required
        />

        <label className="block text-sm font-medium mb-1">Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full border px-3 py-2 rounded-md mb-4 bg-white dark:bg-gray-700 dark:text-white"
        ></textarea>

        <label className="block text-sm font-medium mb-1">Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
        >
          Add Developer
        </button>

        {/* 🔁 Reset Button */}
        <button
          type="button"
          onClick={() => {
            if (window.confirm('Delete all developers?')) {
              localStorage.removeItem('developers');
              setDevs([]);
            }
          }}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
        >
          Reset All Developers
        </button>
      </form>
    </div>
  );
}

export default AddDeveloper;
