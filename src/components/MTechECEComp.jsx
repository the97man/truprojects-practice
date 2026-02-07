import React, { useState } from "react";
import HEADERBG from "../assets/header-background.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import { ECEPageData } from "../data/ECEPageData.js";

export default function MTechECEComp() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div className="relative">
        <img
          src={HEADERBG}
          alt="Background"
          className="mt-30 w-full h-[60vh] object-cover object-[center_25%]"
        />

        <div className="absolute inset-0 z-10">
          <div className="px-10 max-sm:px-4 pt-[22vh]">
            <p className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
              M. TECH ECE PROJECTS
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-6xl mx-auto text-left max-sm:text-center max-lg:text-center max-xl:text-center">
          <h2 className="text-3xl font-bold mt-30">
            PROJECT <span className="text-red-500">TYPES</span>
          </h2>
        </div>

        <div className="mt-10 mb-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ECEPageData.cards.map((card) => (
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
              flex
              flex-col
              text-center
            "
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.title}
                className="mx-auto h-18 w-auto object-contain mb-4"
              />

              {/* Text */}
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>

              {/* Button */}
              <Link
                to={card.link}
                className="
                mt-auto
                inline-block
                bg-red-500
                text-white
                px-4
                py-2
                rounded-lg
                text-sm
                hover:bg-red-700
                transition
              "
              >
                View More
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-5 mb-5 max-w-6xl mx-auto space-y-6">
          {ECEPageData.paragraphs.map((para, index) => (
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
