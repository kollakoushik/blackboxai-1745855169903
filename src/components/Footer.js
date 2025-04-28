import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} MobiusEngine.ai. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
