import HEADERBG from "../assets/header-background.jpg";
import Footer from "./Footer";

export default function SummerInternshipsComp() {
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
            <p className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
              SUMMER INTERNSHIPS
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* <span className="text-3xl font-bold block text-center">
            ABOUT <span className="text-red-500">US</span>
          </span>

          <hr className="w-16 mx-auto mt-2 mb-10 border-0 h-1 bg-red-500" /> */}

          <div className="flex flex-col md:flex-row gap-10 items-center"></div>
        </div>
      </div>

      <Footer />
    </>
  );
}
