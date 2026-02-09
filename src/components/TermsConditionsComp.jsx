import HEADERBG from "../assets/header-background.jpg";
import Footer from "./Footer.jsx";
import { TermsConditionsData } from "../data/TermsConditionsData.js";

export default function TermsConditionsComp() {
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
              TERMS & CONDITIONS
            </p>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="mt-10 px-10 max-sm:px-4">
        {TermsConditionsData.intro.map((para, index) => (
          <p key={index} className="mt-2">
            {para}
          </p>
        ))}
      </div>

      {/* SECTIONS */}
      {TermsConditionsData.sections.map((section, index) => (
        <div key={index} className="mb-10 px-10 max-sm:px-4">
          {(section.title || section.highlight) && (
            <h2 className="text-3xl font-bold mt-10 uppercase">
              {section.title}{" "}
              <span className="text-red-500 uppercase">
                {section.highlight}
              </span>
            </h2>
          )}

          {/* Paragraphs */}
          {section.content?.map((para, i) => (
            <p key={i} className="mt-2">
              {para}
            </p>
          ))}

          {/* Unordered List */}
          {section.list && (
            <ul className="list-disc pl-6 mt-4 space-y-1">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {/* Paragraph after list */}
          {section.afterList && <p className="mt-4">{section.afterList}</p>}
        </div>
      ))}

      <Footer />
    </>
  );
}
