import { FaYoutube } from "react-icons/fa";
import YTBG from "../assets/youtube-background.png";
import YTLOGO from "../assets/youtube-logo.jpg";

export default function YTChannel() {
  return (
    <section className="relative w-full py-16">
      <div className="absolute inset-0">
        <img
          src={YTBG}
          alt="Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex justify-center lg:justify-start">
          {/* Card */}
          <div className="relative w-full sm:w-[85%] md:w-[65%] lg:w-[45%] rounded-xl overflow-hidden shadow-xl">
            <img src={YTLOGO} alt="YouTube Logo" className="w-full" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Text + Button */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 max-sm:px-4 text-center space-y-4">
              {/* Text */}
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                Our Youtube channel is a leading source of expert-driven and
                actionable educational content. Explore hundreds of videos
                featuring experts explaining topics aimed at building big ideas
                and core skills.
              </p>

              {/* Button */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2
                  bg-red-600 hover:bg-red-700
                  text-white text-xs
                  font-semibold
                  px-5 py-2.5
                  rounded-full
                  transition transform hover:scale-105
                  max-sm:text-xs
                  max-sm:px-2
                "
              >
                <FaYoutube className="text-lg" />
                Visit Our Channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
