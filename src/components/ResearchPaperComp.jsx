import React, { useState } from "react";
import HEADERBG from "../assets/header-background.jpg";
import { ResearchPaperData } from "../data/ResearchPaperData.js";
import Footer from "./Footer";
import Card from "../components/Card.jsx";

export default function PaperResearchComp() {
  const [isExpanded, setIsExpanded] = useState(false);

  const PREVIEW_COUNT = 3;
  const MAX_LIST_ITEMS = 5;

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
            <p className="text-white text-4xl max-sm:text-3xl max-lg:text-4xl font-bold">
              RESEARCH PAPER WRITING & PUBLISHING SERVICES
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-20 px-4 mb-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            PAPER <span className="text-red-500">PUBLICATION</span>
          </h2>

          <h2 className="text-2xl font-bold mb-10">
            TRUPROJECTS PUBLISHED 100’S OF AUTHOR’S PAPERS
          </h2>

          <p className="mb-10">
            In last 10 years Truprojects supported 1000’s of scholars and
            students to publish their papers in specified journals. We include a
            team of proficient writers with high expertise in relevant fields to
            deliver the best written research papers tailored to meet the
            standards and specifications of the research scholars through a
            detailed plagiarism and grammar checking stages.
          </p>
        </div>

        {/* Journals */}
        <div>
          <p className="text-center text-3xl mt-30 mb-5">
            JOURNALS WHERE OUR CLIENTS GOT PUBLISHED
          </p>
          <ul
            className="
    flex
    flex-wrap
    justify-center
    gap-3
    max-w-4xl
    mx-auto
  "
          >
            {ResearchPaperData.journals.map((item, index) => (
              <li key={index} className="flex justify-center">
                <p
                  className="
          px-3
          py-2
          text-sm
          rounded-lg
          text-white
          underline
          underline-offset-4
          bg-gray-500
          text-center
          w-full
          sm:w-auto
          max-w-55
        "
                >
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Step Cards */}
        <div className="flex flex-col items-center gap-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mt-30">
              OUR PUBLISHING <span className="text-red-500">PROCESS</span>
            </h2>
          </div>
          <ul className="flex flex-wrap justify-center gap-6 lg:hidden">
            {ResearchPaperData.steps.map((card) => (
              <li key={card.step}>
                <Card card={card} />
              </li>
            ))}
          </ul>

          <ul className="hidden lg:grid xl:hidden grid-cols-3 gap-6">
            {ResearchPaperData.steps.map((card) => (
              <li key={card.step}>
                <Card card={card} />
              </li>
            ))}
          </ul>

          <div className="hidden xl:flex flex-col items-center gap-6">
            <ul className="flex justify-center gap-6">
              {ResearchPaperData.steps.slice(0, 5).map((card) => (
                <li key={card.step}>
                  <Card card={card} />
                </li>
              ))}
            </ul>

            <ul className="flex justify-center gap-6">
              {ResearchPaperData.steps.slice(5).map((card) => (
                <li key={card.step}>
                  <Card card={card} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* JOURNAL PAPER PUBLICATION PROCESS */}
        <div className="max-w-6xl mx-auto text-left">
          <h2 className="text-3xl font-bold mt-30">
            JOURNAL PAPER PUBLICATION{" "}
            <span className="text-red-500">PROCESS</span>
          </h2>

          <div className="mt-5 max-w-full space-y-6">
            {/* Ordered list */}
            <ol className="list-decimal ml-6 space-y-6">
              {ResearchPaperData.process
                .slice(0, MAX_LIST_ITEMS)
                .map((step, index) =>
                  !isExpanded && index >= PREVIEW_COUNT ? null : (
                    <li key={index}>
                      <span className="font-semibold">{step.title}:</span>{" "}
                      {step.description}
                    </li>
                  ),
                )}
            </ol>

            {/* Non-list dynamic content */}
            {isExpanded && ResearchPaperData.extraContent?.length > 0 && (
              <div className="space-y-4">
                {ResearchPaperData.extraContent.map((item, index) => (
                  <p key={index}>{item.description}</p>
                ))}
              </div>
            )}

            {/* Read More / Close */}
            {ResearchPaperData.process.length > PREVIEW_COUNT && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white bg-blue-500 px-4 py-2 hover:cursor-pointer focus:outline-none"
              >
                {isExpanded ? "Close" : "Read More"}
              </button>
            )}
          </div>
        </div>

        {/* Images */}
        <div className="max-w-6xl mx-auto mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 justify-items-center">
            {ResearchPaperData.images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className="w-50 h-auto object-contain mt-10"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
