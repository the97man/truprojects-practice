import { HiOutlineHome } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import FooterData from "../data/FooterData";
import FooterBG from "../assets/footer-background.jpg"; // 👈 your background image

export default function Footer() {
  return (
    <footer
      className="relative pt-10 pb-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${FooterBG})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Us and Contact Us */}
          <div className="lg:col-span-1">
            <strong className="block mb-3 text-lg">About Us</strong>
            <div className="mb-6 space-y-1 text-sm text-gray-200">
              {FooterData.aboutus.desc.map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>

            <strong className="block mb-3 text-lg">Contact Us</strong>

            {/* Address */}
            <div className="flex items-start gap-3 mb-3">
              <HiOutlineHome className="text-red-500 mt-1 shrink-0 text-xl" />
              <div className="text-sm text-gray-200">
                {FooterData.contact.address.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-sm text-gray-200 mb-3">
              <HiOutlinePhone className="text-red-500 shrink-0 text-xl" />
              <span>{FooterData.contact.phone}</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-sm text-gray-200 mb-3">
              <HiOutlineMail className="text-red-500 shrink-0 text-xl" />
              <span>{FooterData.contact.email}</span>
            </div>

            {/* Social Icons */}
            <div className="flex">
              <ul className="flex gap-3">
                {FooterData.social.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 border border-white/30 rounded hover:bg-red-500 transition"
                    >
                      <img
                        src={social.icon}
                        alt={social.alt}
                        className="w-4 h-4"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links Column One */}
          <div className="lg:col-span-1">
            <strong className="block mb-2">Quick Links</strong>

            <ul className="list-disc marker:text-red-500 pl-6 space-y-4">
              {FooterData.quicklinks1.map((quicklinks1, index) => (
                <li key={index}>
                  <a
                    href={quicklinks1.url}
                    className="text-white text-decoration-none hover:text-red-500 transition"
                  >
                    {quicklinks1.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column Two */}
          <div className="lg:col-span-1">
            {/* Invisible heading for alignment */}
            <strong className="block opacity-0 select-none max-sm:hidden">
              Quick Links
            </strong>

            <ul className="list-disc marker:text-red-500 pl-6 space-y-4">
              {FooterData.quicklinks2.map((quicklinks2, index) => (
                <li key={index}>
                  <a
                    href={quicklinks2.url}
                    className="text-white text-decoration-none hover:text-red-500 transition"
                  >
                    {quicklinks2.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column Three */}
          <div className="lg:col-span-1">
            {/* Invisible heading for alignment */}
            <strong className="block opacity-0 select-none max-sm:hidden">
              Quick Links
            </strong>

            <ul className="list-disc marker:text-red-500 pl-6 space-y-4">
              {FooterData.quicklinks3.map((quicklinks3, index) => (
                <li key={index}>
                  <a
                    href={quicklinks3.url}
                    className="text-white text-decoration-none hover:text-red-500 transition"
                  >
                    {quicklinks3.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-300">
          {FooterData.copyright}
        </div>
      </div>
    </footer>
  );
}
