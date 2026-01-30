import { AboutUsData } from "../data/AboutUsData";

export default function AboutUs() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading */}
      <span className="text-3xl font-bold">
        <span>ABOUT</span> <span className="text-red-500">US</span>
      </span>

      <hr className="w-16 mt-2 border-0 h-1 bg-red-500" />

      {/* Content */}
      <div className="mt-10 flex flex-col md:flex-row gap-6 items-center">
        {/* Image */}
        <img
          src={AboutUsData.image}
          alt="About Tru Projects"
          className="w-full md:w-1/2 rounded-lg shadow"
        />

        {/* Text */}
        <div className="w-full md:w-1/2 text-gray-700 leading-relaxed space-y-4">
          {AboutUsData.aboutus.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
