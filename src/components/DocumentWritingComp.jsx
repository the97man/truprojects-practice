import HEADERBG from "../assets/header-background.jpg";
import { DocumentWritingData } from "../data/DocumentWritingData.js";
import Footer from "./Footer";
import Card from "../components/Card.jsx";

export default function DocumentWritingComp() {
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
              DOCUMENT WRITING
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-20 px-4 mb-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            PLAGIARISM <span className="text-red-500">CHECK</span>
          </h2>

          <h2 className="text-2xl font-bold mb-10">
            TRUPROJECTS WILL PROVIDE A COMPLETE SOLUTION FOR YOUR DOCUMENT AS
            PER YOUR UNIVERSITY GUIDELINES WITH NO PLAGIARISM
          </h2>
        </div>

        {/* PLAGIARISM CHECKS */}
        <div>
          <p className="text-center text-3xl mt-30 mb-5">
            PLAGIARISMS CHECKING FOR YOU ARE?
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
            {DocumentWritingData.plagiarism.map((item, index) => (
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
              HOW TRUPROJECTS AVOID{" "}
              <span className="text-red-500">PLAGIARISM</span>
            </h2>
          </div>
          <ul className="flex flex-wrap justify-center gap-6 lg:hidden">
            {DocumentWritingData.steps.map((card) => (
              <li key={card.step}>
                <Card card={card} />
              </li>
            ))}
          </ul>

          <ul className="hidden lg:grid xl:hidden grid-cols-3 gap-6">
            {DocumentWritingData.steps.map((card) => (
              <li key={card.step}>
                <Card card={card} />
              </li>
            ))}
          </ul>

          <div className="hidden xl:flex flex-col items-center gap-6">
            <ul className="flex justify-center gap-6">
              {DocumentWritingData.steps.slice(0, 5).map((card) => (
                <li key={card.step}>
                  <Card card={card} />
                </li>
              ))}
            </ul>

            <ul className="flex justify-center gap-6">
              {DocumentWritingData.steps.slice(5).map((card) => (
                <li key={card.step}>
                  <Card card={card} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Images */}
        <div className="max-w-6xl mx-auto mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 justify-items-center">
            {DocumentWritingData.images.map((img, index) => (
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
