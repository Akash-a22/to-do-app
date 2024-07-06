import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white text-center  py-4">
      <h1 className="text-2xl font-bold">ToDoList</h1>
      <nav className="mt-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
