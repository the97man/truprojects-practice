import YTBG from "../assets/youtube-background.png";
import YTLOGO from "../assets/youtube-logo.jpg";

export default function YTChannel() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Heading */}
      <div className="text-center md:text-left">
        <span className="text-3xl font-bold">
          <span>YOUTUBE</span> <span className="text-red-500">CHANNEL</span>
        </span>
        <hr className="w-16 mt-2 mx-auto md:mx-0 border-0 h-1 bg-red-500" />
      </div>

      <div className="mt-10 relative w-full min-h-70 sm:min-h-70 md:min-h-70 overflow-hidden rounded-xl">
        {/* Background image */}
        <img
          src={YTBG}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        {/* Overlay container */}
        <div className="relative z-10 flex justify-center md:justify-start items-center h-full px-4">
          <div className="relative w-full max-w-sm md:max-w-md md:ml-20">
            {/* Logo */}
            <img
              src={YTLOGO}
              alt="YouTube Logo"
              className="w-full rounded-lg"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 rounded-lg" />

            {/* Text */}
            <p className="absolute inset-0 z-10 flex items-center justify-center text-white text-xs sm:text-sm md:text-base px-4 text-center leading-relaxed">
              Our Youtube channel is a leading source of expert-driven and
              actionable educational content. Explore hundreds of videos
              featuring experts explaining topics aimed at building core skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
