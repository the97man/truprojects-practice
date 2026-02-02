import { SocialLinksData } from "../data/SocialLinksData";

const TopNavbar = () => {
  return (
    <nav className="fixed top-0 z-9999 w-full bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* LEFT SIDE */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-gray-100">
          {/* Contact Info */}
          <p className="text-xs md:text-sm">
            <span className="cursor-pointer">91-9676190678</span>
            <span className="hidden md:inline">
              {" "}
              &nbsp; info@truprojects.in
            </span>
            <span className="block md:hidden">info@truprojects.in</span>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {SocialLinksData.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={icon.img}
                  alt={icon.alt}
                  className="h-4 w-4 md:h-5 md:w-5 object-contain hover:opacity-80 transition"
                />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <button className="text-red-500 px-5 py-2 text-sm md:text-base border-2 border-red-500 rounded-lg whitespace-nowrap">
          Register Now
        </button>
      </div>
    </nav>
  );
};

export default TopNavbar;
