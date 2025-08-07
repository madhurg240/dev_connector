import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-800 text-black dark:text-white">
      {/* Logo / Brand */}
      <Link to="/" className="text-xl font-bold tracking-wide">
        DevConnector
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:underline text-sm">
          All Developers
        </Link>

        <Link to="/add-developer" className="hover:underline text-sm">
          Add Developer
        </Link>

        {/* Theme toggle button */}
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
