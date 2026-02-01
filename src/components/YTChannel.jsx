import YTBG from "../assets/youtube-background.png";
import YTLOGO from "../assets/youtube-logo.jpg";

export default function YTChannel() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading */}
      <span className="text-3xl font-bold">
        <span>YOUTUBE</span> <span className="text-red-500">CHANNEL</span>
      </span>

      <hr className="w-16 mt-2 border-0 h-1 bg-red-500" />

      <div className="mt-10 relative w-full h-[320px] sm:h-[380px] md:h-[420px] overflow-hidden rounded-xl">
        {/* Background Image */}
        <img
          src={YTBG}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        {/* Overlay */}
        <div
          className="
      relative z-10
      mx-auto mt-10
      w-[90%]
      sm:w-[75%]
      md:w-[60%]
      md:ml-40 md:mt-14
    "
        >
          {/* Logo */}
          <img src={YTLOGO} alt="YouTube Logo" className="w-full rounded-lg" />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 rounded-lg" />

          {/* Text */}
          <p
            className="
        absolute inset-0 z-10
        flex items-center justify-center
        text-white text-xs sm:text-sm
        px-4 text-center leading-relaxed
      "
          >
            Our Youtube channel is a leading source of expert-driven and
            actionable educational content. Explore hundreds of videos featuring
            experts explaining topics aimed at getting us big ideas and core
            skills.
          </p>
        </div>
      </div>
    </section>
  );
}
