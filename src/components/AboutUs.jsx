import { AboutUsData } from "../data/AboutUsData";
// import AboutDropdown from "./AboutDropdown";

export default function AboutUs() {
  return (
    <div>
      <span className="ml-15 text-3xl font-bold">
        <span>ABOUT</span> <span className="text-red-500">US</span>
      </span>

      <hr className="w-13 mt-2 ml-15 border-0 h-1 bg-red-500" />

      {/* Content */}
      <div className="mt-10 flex gap-6 justify-center items-center max-sm:flex-column">
        <img
          src={AboutUsData.image}
          alt="About Tru Projects"
          className="w-full max-w-md rounded-lg shadow"
        />

        <div className="text-gray-700 leading-relaxed max-w-xl border-4 border-red-500 p-4">
          {AboutUsData.aboutus.map((text, index) => (
            <>
              <p className="mb-3" key={index}>
                {text}
              </p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
