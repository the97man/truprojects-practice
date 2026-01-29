import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/logo.png";

const navLinks = [
  { label: "Home", path: "#" },
  { label: "About Us", path: "#" },
  { label: "B. Tech Projects", path: "#" },
  { label: "M. Tech Projects", path: "#" },
  { label: "Paper Research", path: "#" },
  { label: "Document Writing", path: "#" },
  { label: "Summer Internships", path: "#" },
  { label: "Contact Us", path: "#" },
];

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      // style={{ top: "60px" }}
      className="top-15 fixed left-0 z-9998 w-full bg-white shadow"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={LOGO} alt="Ushnik Logo" className="w-50" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="p-2 text-sm rounded-lg hover:text-gray-100 hover:bg-red-500 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 font-medium hover:text-emerald-600 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MainHeader;
