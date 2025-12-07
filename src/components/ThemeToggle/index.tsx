import React from 'react';
import { useTheme } from '../ThemeProvider';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FaMoon className="text-gray-800 dark:text-gray-200" />
      ) : (
        <FaSun className="text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;