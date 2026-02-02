function Accordion({ title, isOpen, onToggle, children }) {
  return (
    <div className="shadow bg-red-500 rounded-lg">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-4 py-3 text-left font-medium rounded-t-lg text-gray-100 hover:text-red-500 hover:bg-gray-100 transition"
      >
        <span>{title}</span>

        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-90 max-sm:max-h-full max-lg:max-h-full max-xl:max-h-full"
            : "max-h-0"
        }`}
      >
        <div className="px-4 py-3 text-gray-600 bg-gray-100 space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
