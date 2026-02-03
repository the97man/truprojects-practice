import { useState } from "react";
import Accordion from "./Accordion";
import { AboutUsSectionData } from "../data/AboutUsSectionData.js";

export default function AboutUsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading */}
      <span className="text-3xl font-bold">
        <span>ABOUT</span> <span className="text-red-500">US</span>
      </span>

      <hr className="w-16 mt-2 border-0 h-1 bg-red-500" />

      {/* Content */}
      <div className="mt-10 flex flex-col md:flex-row gap-8 items-start">
        {/* Image */}
        <img
          src={AboutUsSectionData.image}
          alt="About Tru Projects"
          className="w-full md:w-1/2 rounded-lg shadow"
        />

        {/* Accordions */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-12">
            {AboutUsSectionData.sections.map((section, index) => (
              <Accordion
                key={index}
                title={section.title}
                isOpen={openIndex === index}
                onToggle={() => toggleAccordion(index)}
              >
                {section.content.map((item, i) => (
                  <p key={i}> {item}</p>
                ))}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
