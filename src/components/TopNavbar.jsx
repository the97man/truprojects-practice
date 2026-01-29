import YT from "../assets/youtube.png";
import FB from "../assets/facebook.png";
import WA from "../assets/whatsapp.png";
import IG from "../assets/instagram.png";
import LIN from "../assets/linkedin.png";

const TopNavbar = () => {
  // Social Icons (Dynamic)
  const socialLinks = [
    { img: YT, alt: "YouTube", href: "#" },
    { img: FB, alt: "Facebook", href: "#" },
    { img: WA, alt: "WhatsApp", href: "#" },
    { img: IG, alt: "Instagram", href: "#" },
    { img: LIN, alt: "LinkedIn", href: "#" },
  ];
  return (
    <nav className="fixed top-0 z-[9999] h-[60px] w-full bg-gray-950 flex items-center pr-8">
      <div className="w-full max-w-7xl mx-auto flex items-center px-4">
        <div className="flex items-center gap-6">
          {/* Contact Info */}
          <div className="hidden md:block text-gray-100">
            <p>
              <span className="cursor-pointer">91-9676190678</span>
              &nbsp; &nbsp; info@truprojects.in
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={icon.img}
                  alt={icon.alt}
                  className="h-5 w-5 object-contain hover:opacity-80 transition"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <button className="text-red-500 px-4 py-2 text-2xl border-solid border-2 border-red-500 rounded-lg">
        Register Now
      </button>
    </nav>
  );
};

export default TopNavbar;
