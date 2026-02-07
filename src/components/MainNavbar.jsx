import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLinksData } from "../data/NavLinksData";
import LOGO from "../assets/logo.png";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="fixed top-14 left-0 z-50 w-full bg-white shadow">
      <div className="mx-auto flex max-w-7xl justify-between px-4 py-3 mt-4 items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={LOGO} alt="Logo" className="w-40" />
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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
          {NavLinksData.map((item, index) => {
            const basePath =
              item.label === "B. Tech Projects"
                ? "/b-tech-page"
                : item.label === "M. Tech Projects"
                  ? "/m-tech-page"
                  : "";

            return (
              <li key={index} className="relative group">
                <Link
                  to={item.path}
                  className="p-2 text-sm font-medium rounded-lg hover:bg-red-500 hover:text-white transition"
                >
                  {item.label}
                </Link>

                {item.dropdown && (
                  <div
                    className="
                      absolute left-1/2 top-full -translate-x-1/2
                      w-[720px] opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-200
                    "
                  >
                    <div className="mt-4 rounded-xl bg-white border shadow-xl p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {item.menu.map((col, i) => (
                          <div key={i}>
                            {/* Branch title */}
                            <Link
                              to={`${basePath}/${col.branch}`}
                              className="mb-3 inline-block text-sm font-semibold p-2 rounded-lg text-gray-900 hover:bg-red-500 hover:text-white transition"
                            >
                              {col.title}
                            </Link>

                            {col.links.length ? (
                              <ul className="space-y-2">
                                {col.links.map((link, j) => (
                                  <li key={j}>
                                    <Link
                                      to={`${basePath}/${col.branch}/${link.slug}`}
                                      className="block text-sm p-2 rounded-lg text-gray-600 hover:bg-red-500 hover:text-white transition"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm text-gray-400 italic">—</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile / Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <ul className="flex flex-col px-6 py-4">
            {NavLinksData.map((item, index) => {
              const basePath =
                item.label === "B. Tech Projects"
                  ? "/b-tech-page"
                  : item.label === "M. Tech Projects"
                    ? "/m-tech-page"
                    : "";

              return (
                <li key={index} className="border-b py-3">
                  {item.dropdown ? (
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                      className="flex w-full items-center justify-between font-medium py-2 text-gray-800"
                    >
                      {item.label}
                      <span>▾</span>
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 font-medium text-gray-800"
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.dropdown && openDropdown === index && (
                    <div className="mt-3 space-y-4 pl-4">
                      {item.menu.map((col, i) => (
                        <div key={i}>
                          <Link
                            to={`${basePath}/${col.branch}`}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm font-semibold text-gray-900 hover:text-red-500"
                          >
                            {col.title}
                          </Link>

                          {col.links.map((link, j) => (
                            <Link
                              key={j}
                              to={`${basePath}/${col.branch}/${link.slug}`}
                              onClick={() => setIsOpen(false)}
                              className="block py-1 text-sm text-gray-600 hover:text-red-500"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
