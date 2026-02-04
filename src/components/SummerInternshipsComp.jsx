import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SummerInternshipsData } from "../data/SummerInternshipsData.js";
import { SocialLinksData } from "../data/SocialLinksData";
import { AboutUsPageData } from "../data/AboutUsPageData.js";
import Footer from "./Footer";

export default function SummerInternshipsComp() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto bg-blue-500 mt-20 px-4 sm:px-6 lg:px-8 rounded-lg">
          {/* HEADER */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white pt-10">
              SUMMER INTERNSHIPS
            </h2>
          </div>

          {/* OPTIONS */}
          <div className="mt-10">
            <ul className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {SummerInternshipsData.options.map((item, index) => (
                <li key={index} className="shrink">
                  <Link
                    className="
          inline-block
          px-2 sm:px-4
          py-2
          text-sm
          rounded-lg
          text-white
          bg-gray-500
          text-center
          w-auto
        "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DIVIDER */}
          <div className="mt-8 mb-4 flex justify-center">
            <hr className="border-t-2 border-white w-[90%] max-w-150" />
          </div>

          {/* SUB-HEADER */}
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              COMPLETE TRAINING ON TECHNOLOGY | PROJECT DEVELOPMENT
            </h2>
          </div>
          <div className="mt-4 flex justify-center">
            <hr className="border-t-2 border-white w-[90%] max-w-150" />
          </div>

          {/* INTERNSHIP INFO */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-10 text-center">
            {/* Training Fee */}
            <div className="border border-white p-4 flex-1 min-w-55 rounded-lg max-sm:text-sm">
              <span className="font-bold text-white text-lg block mb-2">
                Training Fee
              </span>
              <p className="text-white">One Day Internship : Rs. 3,500/-</p>
              <p className="text-white">45 Days Internship : Rs. 6,500/-</p>
            </div>

            {/* Registration */}
            <div className="border border-white p-4 flex-1 min-w-55 rounded-lg flex flex-col justify-center">
              <span className="font-semibold mb-4 text-white text-lg">
                May June July
              </span>
              <button className="bg-red-500 p-3 rounded-lg cursor-pointer hover:bg-blue-900 hover:text-white transition">
                Register Now
              </button>
            </div>

            {/* Contact & Social */}
            <div className="border border-white p-4 flex-1 min-w-55 rounded-lg flex flex-col items-center">
              <span className="font-semibold mb-2 text-white text-lg">
                Contact Us
              </span>
              <span className="font-semibold mb-2 text-white text-lg">
                MANOJ: +91 9676190678
              </span>

              {/* Social Icons */}
              <div className="flex justify-center gap-3 mt-2 flex-wrap">
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

          {/* LOCATION INFO */}
          <div className="flex flex-col max-w-4xl mx-auto text-center mt-10 font-bold text-white gap-2 px-4">
            <span>HYDERABAD</span>
            <span className="mb-5 text-sm sm:text-base">
              407, 4th Floor, Pavani Prestige (R.S Brothers) Building, Ameerpet,
              Hyderabad, India. Opposite Image Hospital & Beside KLM Fashion
              Mall.
            </span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-left">
          <h2 className="text-3xl font-bold mt-30">
            Registration <span className="text-red-500">Process</span>
          </h2>
        </div>

        <div className="bg-white py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SummerInternshipsData.cards.map((card) => (
              <div
                key={card.id}
                className="
              bg-white
              rounded-lg
              shadow-md
              hover:shadow-xl
              transition-shadow
              duration-300
              p-6
              text-center
            "
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="mx-auto h-32 w-auto object-contain mb-4"
                />

                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>

                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-left">
          <h2 className="text-3xl font-bold mt-30">
            About Summer <span className="text-red-500">Internship</span>
          </h2>
        </div>

        <div className="mt-5 max-w-6xl mx-auto space-y-6">
          {SummerInternshipsData.paragraphs.map((para, index) => (
            <p
              key={index}
              className={
                !isExpanded && index === 0
                  ? "line-clamp-3"
                  : !isExpanded
                    ? "hidden"
                    : ""
              }
            >
              {para}
            </p>
          ))}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-white bg-blue-500 px-4 py-2 hover:cursor-pointer focus:outline-none"
          >
            {isExpanded ? "Close" : "Read More"}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
