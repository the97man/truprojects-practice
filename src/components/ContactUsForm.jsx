import React from "react";
import {
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
import CONTACTUSBG from "../assets/contact-us-background.jpg";
import GoogleMap from "./GoogleMap";
import Footer from "./Footer";

export default function ContactUsForm() {
  return (
    <>
      <div className="relative">
        {/* Background image */}
        <img
          src={CONTACTUSBG}
          alt="Background"
          className="mt-30 w-full h-full object-cover"
        />

        {/* Overlay container */}
        <div className="absolute inset-0 z-10 flex flex-col">
          {/* Text */}
          <div className="px-10 max-sm:px-4 mt-24">
            <p className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-left">
              CONTACT US
            </p>
          </div>

          {/* Full-width contact form div */}
          <div className="mt-60 w-full max-sm:px-4">
            <div className="bg-white bg-opacity-80 w-full flex gap-12 flex-wrap justify-center lg:flex-nowrap lg:justify-center">
              {/* Contact Form */}
              <div className="mt-10 w-full max-sm:w-full sm:w-[90%] md:w-[45%] lg:w-auto">
                <span className="text-3xl font-bold">
                  <span>INTERESTED IN</span>{" "}
                  <span className="text-red-500">DISCUSSING?</span>
                </span>

                <hr className="w-16 mt-2 mb-10 border-0 h-1 bg-red-500" />

                <form className="mb-10 flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label className="font-bold">Name</label>
                    <input
                      type="text"
                      placeholder="Name of the Student"
                      className="w-full py-0.5 border border-solid outline-none focus:ring-0 pl-2"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex flex-col w-full sm:w-1/2">
                      <label className="font-bold">Phone</label>
                      <input
                        type="number"
                        className="w-full py-0.5 border border-solid outline-none focus:ring-0 pl-2"
                      />
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2">
                      <label className="font-bold">Email</label>
                      <input
                        type="email"
                        className="w-full py-0.5 border border-solid outline-none focus:ring-0 pl-2"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex flex-col w-full sm:w-1/2">
                      <label className="font-bold">College Name</label>
                      <input
                        type="text"
                        className="w-full py-0.5 border border-solid outline-none focus:ring-0 pl-2"
                      />
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2">
                      <label className="font-bold">City</label>
                      <input
                        type="text"
                        className="w-full py-0.5 border border-solid outline-none focus:ring-0 pl-2"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex flex-col w-full sm:w-1/2">
                      <label className="font-bold">Course</label>
                      <select
                        className="w-full py-0.5 border border-solid outline-none focus:ring-0 pl-2"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select Course
                        </option>
                        <option value="btech">B. Tech</option>
                        <option value="mtech">M. Tech</option>
                        <option value="mca">MCA</option>
                        <option value="bcom">BCom</option>
                        <option value="bsc">BSc</option>
                        <option value="diploma">Diploma</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2">
                      <label className="font-bold">Branch</label>
                      <select
                        className="w-full py-0.5 border border-solid outline-none focus:ring-0 pl-2"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select Branch
                        </option>
                        <option value="cse">CSE</option>
                        <option value="ece">ECE</option>
                        <option value="ai-ml">AI-ML</option>
                        <option value="it">IT</option>
                        <option value="cybersecurity">Cyber Security</option>
                        <option value="iot">IOT</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <button className="w-full h-10 mt-4 bg-red-500 text-white hover:bg-white hover:text-red-500 transition-all cursor-pointer">
                    Submit
                  </button>
                </form>
              </div>
              {/* Address Section */}
              <div className="mt-10 w-full max-sm:w-full sm:w-[90%] md:w-[45%] lg:w-auto">
                <span className="text-3xl font-bold">
                  <span>OUR</span> <span className="text-red-500">ADDRESS</span>
                </span>

                <hr className="w-16 mt-2 mb-10 border-0 h-1 bg-red-500" />

                <div className="flex flex-col gap-6">
                  <div className="border border-solid flex items-center p-4 sm:p-6 gap-5">
                    <HiOutlinePhone className="w-8 h-8 text-red-500" />
                    <div className="flex flex-col">
                      <span className="font-semibold">Phone</span>
                      <span>91-9676190678</span>
                    </div>
                  </div>

                  <div className="border border-solid flex items-center p-4 sm:p-6 gap-5">
                    <HiOutlineLocationMarker className="w-8 h-8 text-red-500 max-sm:w-50 max-md:w-50" />
                    <div className="flex flex-col">
                      <span className="font-semibold">Address</span>
                      <span className="w-full sm:w-80 md:w-60 ">
                        407, 4th Floor, Pavani Prestige (R.S Brothers) Building,
                        Ameerpet, Opposite Image Hospital & Beside KLM Fashion
                        Mall. City: Hyderabad, State: Telangana, Postal / Zip
                        Code: 500016, Country: India
                      </span>
                    </div>
                  </div>

                  <div className="border border-solid flex items-center p-4 sm:p-6 gap-5">
                    <HiOutlineMail className="w-8 h-8 text-red-500" />
                    <div className="flex flex-col">
                      <span className="font-semibold">Email</span>
                      <span>info@truprojects.in</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <GoogleMap />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
