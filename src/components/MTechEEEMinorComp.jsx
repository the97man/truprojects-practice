// import React, { useState } from "react";
import HEADERBG from "../assets/header-background.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import { ProjectsData } from "../data/ProjectsData.js";

export default function MTechEEEMinorComp() {
  // const [isExpanded, setIsExpanded] = useState(false);
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
              M. TECH EEE MINOR PROJECTS
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
