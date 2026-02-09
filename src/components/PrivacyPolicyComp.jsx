import HEADERBG from "../assets/header-background.jpg";
import Footer from "./Footer.jsx";
import { PrivacyPolicyData } from "../data/PrivacyPolicyData.js";

export default function PrivacyPolicyComp() {
  return (
    <>
      {/* HEADER */}
      <div className="relative">
        <img
          src={HEADERBG}
          alt="Background"
          className="mt-30 w-full h-[60vh] object-cover object-[center_25%]"
        />

        <div className="absolute inset-0 z-10">
          <div className="px-10 max-sm:px-4 pt-[22vh]">
            <p className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
              PRIVACY POLICY
            </p>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="mt-10 px-10 max-sm:px-4">
        {PrivacyPolicyData.intro.map((para, index) => (
          <p key={index} className="mt-2">
            {para}
          </p>
        ))}
      </div>

      {/* SECTIONS */}
      {PrivacyPolicyData.sections.map((section, index) => (
        <div key={index} className="mb-10 px-10 max-sm:px-4">
          <h2 className="text-3xl font-bold mt-10 text-transform: uppercase">
            {section.title}{" "}
            <span className="text-red-500 text-transform: uppercase">
              {section.highlight}
            </span>
          </h2>

          {section.content.map((para, i) => (
            <p key={i} className="mt-2">
              {para}
            </p>
          ))}
        </div>
      ))}

      <Footer />
    </>
  );
}
