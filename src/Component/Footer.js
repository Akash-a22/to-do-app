import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-2 w-full fixed bottom-0">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} ToDoList. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
