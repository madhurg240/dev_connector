import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-sm px-4 py-2 border rounded-md"
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default ThemeToggle;