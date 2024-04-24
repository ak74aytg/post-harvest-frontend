import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-3">
          &copy; 2024 Your Company Name. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
