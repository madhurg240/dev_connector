import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddDeveloper from './pages/AddDeveloper';
import AllDevelopers from './pages/AllDevelopers';
import DeveloperProfile from './pages/Profile';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <Routes>
        {/* ✅ Home Page — All Developers */}
        <Route path="/" element={<AllDevelopers />} />

        {/* ✅ Add Developer Page */}
        <Route path="/add-developer" element={<AddDeveloper />} />

        {/* ✅ Developer Profile Page */}
        <Route path="/profile/:id" element={<DeveloperProfile />} />
      </Routes>
    </div>
  );
}

export default App;
