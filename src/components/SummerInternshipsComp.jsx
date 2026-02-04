import { Link } from "react-router-dom";
import HEADERBG from "../assets/header-background.jpg";
import { SummerInternshipsData } from "../data/SummerInternshipsData.js";
import { SocialLinksData } from "../data/SocialLinksData";
import Footer from "./Footer";

export default function SummerInternshipsComp() {
  return (
    <>
      <div className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto my-auto bg-blue-500 mt-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white pt-10">
              SUMMER INTERNSHIPS
            </h2>
          </div>
          {/* OPTIONS */}
          <div>
            <ul className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mt-10">
              {SummerInternshipsData.journals.map((item, index) => (
                <li key={index}>
                  <Link
                    className="
          inline-block
          px-4
          py-2
          text-sm
          rounded-lg
          text-white
          bg-gray-500
          text-center
        "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <hr className="border-t-2 border-white w-220 mx-auto" />
          </div>

          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white pt-2">
              COMPLETE TRAINING ON TECHNOLOGY | PROJECT DEVELOPEMENT
            </h2>
          </div>

          <div className="pt-2">
            <hr className="border-t-2 border-white w-220 mx-auto" />
          </div>

          {/* INTERNSHIP INFO */}
          <div className="flex justify-center gap-6 mt-10">
            <div className="border border-white flex items-center p-4 gap-5 text-center">
              <div className="font-bold">
                <span className="text-lg text-white">Training Fee</span>
                <p>One Day Internship : Rs. 3,500/-</p>
                <p>45 Days Internship : Rs. 6,500/-</p>
              </div>
            </div>

            <div className="border border-white flex items-center p-4 gap-5 text-center">
              <div className="flex flex-col">
                <span className="font-semibold mb-4">May June July</span>
                <button className="bg-red-500 p-4 cursor-pointer hover:bg-blue-900 hover:text-white">
                  Register Now
                </button>
              </div>
            </div>

            <div className="border border-white flex items-center p-4 gap-5 text-center">
              <div className="flex flex-col">
                <span className="font-semibold mb-4 text-white text-lg">
                  Contact Us
                </span>

                <span className="font-semibold mb-4 text-white text-lg">
                  MANOJ: +91 9676190678
                </span>

                {/* Social Icons */}
                <div className="flex justify-center gap-3">
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
                        className="h-8 w-8 md:h-8 md:w-8 object-contain hover:opacity-80 transition"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-6xl mx-auto text-center mt-10 font-bold">
            <span>HYDERABAD</span>
            <span className="mb-5">
              407, 4th Floor, Pavani Prestige (R.S Brothers)Building, Ameerpet,
              Hyderabad, India Opposite Image Hospital & Beside KLM Fashion
              Mall.
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
