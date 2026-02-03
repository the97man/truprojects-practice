// import React from "react";
// import {
//   HiOutlinePhone,
//   HiOutlineLocationMarker,
//   HiOutlineMail,
// } from "react-icons/hi";
// import HEADERBG from "../assets/header-background.jpg";
// import GoogleMap from "./GoogleMap";
// import Footer from "./Footer";

// export default function ContactUsForm() {
//   return (
//     <>
//       <div className="relative">
//         {/* Background image */}
//         <img
//           src={HEADERBG}
//           alt="Background"
//           className="mt-30 w-full h-full object-cover"
//         />

//         {/* Overlay container */}
//         <div className="absolute inset-0 z-10 flex flex-col">
//           {/* Text */}
//           <div className="px-10 max-sm:px-4 mt-24">
//             <p className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-left">
//               CONTACT US
//             </p>
//           </div>

//           {/* Full-width contact form div */}
//           <div className="mt-60 w-full max-sm:px-4">
//             <div className="bg-white bg-opacity-80 w-full flex gap-12 flex-wrap justify-center lg:flex-nowrap lg:justify-center">
//               {/* Contact Form */}
//               <div className="mt-10 w-full max-sm:w-full sm:w-[90%] md:w-[45%] lg:w-auto">
//                 <span className="text-3xl font-bold">
//                   <span>INTERESTED IN</span>{" "}
//                   <span className="text-red-500">DISCUSSING?</span>
//                 </span>

//                 <hr className="w-16 mt-2 mb-10 border-0 h-1 bg-red-500" />

//                 <form className="mb-10 flex flex-col gap-4">
//                   <div className="flex flex-col">
//                     <label className="font-bold">Name</label>
//                     <input
//                       type="text"
//                       placeholder="Name of the Student"
//                       className="w-full py-0.5 border border-solid outline-none focus:ring-0 pl-2"
//                     />
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-3">
//                     <div className="flex flex-col w-full sm:w-1/2">
//                       <label className="font-bold">Phone</label>
//                       <input
//                         type="number"
//                         className="w-full py-0.5 border border-solid outline-none focus:ring-0 pl-2"
//                       />
//                     </div>

//                     <div className="flex flex-col w-full sm:w-1/2">
//                       <label className="font-bold">Email</label>
//                       <input
//                         type="email"
//                         className="w-full py-0.5 border border-solid outline-none focus:ring-0 pl-2"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-3">
//                     <div className="flex flex-col w-full sm:w-1/2">
//                       <label className="font-bold">College Name</label>
//                       <input
//                         type="text"
//                         className="w-full py-0.5 border border-solid outline-none focus:ring-0 pl-2"
//                       />
//                     </div>

//                     <div className="flex flex-col w-full sm:w-1/2">
//                       <label className="font-bold">City</label>
//                       <input
//                         type="text"
//                         className="w-full py-0.5 border border-solid outline-none focus:ring-0 pl-2"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-3">
//                     <div className="flex flex-col w-full sm:w-1/2">
//                       <label className="font-bold">Course</label>
//                       <select
//                         className="w-full py-0.5 border border-solid outline-none focus:ring-0 pl-2"
//                         defaultValue=""
//                       >
//                         <option value="" disabled>
//                           Select Course
//                         </option>
//                         <option value="btech">B. Tech</option>
//                         <option value="mtech">M. Tech</option>
//                         <option value="mca">MCA</option>
//                         <option value="bcom">BCom</option>
//                         <option value="bsc">BSc</option>
//                         <option value="diploma">Diploma</option>
//                         <option value="other">Other</option>
//                       </select>
//                     </div>

//                     <div className="flex flex-col w-full sm:w-1/2">
//                       <label className="font-bold">Branch</label>
//                       <select
//                         className="w-full py-0.5 border border-solid outline-none focus:ring-0 pl-2"
//                         defaultValue=""
//                       >
//                         <option value="" disabled>
//                           Select Branch
//                         </option>
//                         <option value="cse">CSE</option>
//                         <option value="ece">ECE</option>
//                         <option value="ai-ml">AI-ML</option>
//                         <option value="it">IT</option>
//                         <option value="cybersecurity">Cyber Security</option>
//                         <option value="iot">IOT</option>
//                         <option value="other">Other</option>
//                       </select>
//                     </div>
//                   </div>

//                   <button className="w-full h-10 mt-4 bg-red-500 text-white hover:bg-white hover:text-red-500 transition-all cursor-pointer">
//                     Submit
//                   </button>
//                 </form>
//               </div>
//               {/* Address Section */}
//               <div className="mt-10 w-full max-sm:w-full sm:w-[90%] md:w-[45%] lg:w-auto">
//                 <span className="text-3xl font-bold">
//                   <span>OUR</span> <span className="text-red-500">ADDRESS</span>
//                 </span>

//                 <hr className="w-16 mt-2 mb-10 border-0 h-1 bg-red-500" />

//                 <div className="flex flex-col gap-6">
//                   <div className="border border-solid flex items-center p-4 sm:p-6 gap-5">
//                     <HiOutlinePhone className="w-8 h-8 text-red-500" />
//                     <div className="flex flex-col">
//                       <span className="font-semibold">Phone</span>
//                       <span>91-9676190678</span>
//                     </div>
//                   </div>

//                   <div className="border border-solid flex items-center p-4 sm:p-6 gap-5">
//                     <HiOutlineLocationMarker className="w-8 h-8 text-red-500 max-sm:w-50 max-md:w-50" />
//                     <div className="flex flex-col">
//                       <span className="font-semibold">Address</span>
//                       <span className="w-full sm:w-80 md:w-60 ">
//                         407, 4th Floor, Pavani Prestige (R.S Brothers) Building,
//                         Ameerpet, Opposite Image Hospital & Beside KLM Fashion
//                         Mall. City: Hyderabad, State: Telangana, Postal / Zip
//                         Code: 500016, Country: India
//                       </span>
//                     </div>
//                   </div>

//                   <div className="border border-solid flex items-center p-4 sm:p-6 gap-5">
//                     <HiOutlineMail className="w-8 h-8 text-red-500" />
//                     <div className="flex flex-col">
//                       <span className="font-semibold">Email</span>
//                       <span>info@truprojects.in</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <GoogleMap />
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import {
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
import HEADERBG from "../assets/header-background.jpg";
import GoogleMap from "./GoogleMap";
import Footer from "./Footer";

export default function ContactUsForm() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative">
        {/* Background image */}
        <img
          src={HEADERBG}
          alt="Background"
          className="mt-30 w-full h-[60vh] object-cover object-[center_25%]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-10">
          <div className="px-10 max-sm:px-4 pt-[22vh]">
            <p className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide">
              CONTACT US
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION (NO BACKGROUND IMAGE) */}
      <div className="bg-white">
        <div className="w-full max-sm:px-4 py-16">
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
                    className="w-full py-1 border outline-none pl-2"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex flex-col w-full sm:w-1/2">
                    <label className="font-bold">Phone</label>
                    <input
                      type="number"
                      className="w-full py-1 border outline-none pl-2"
                    />
                  </div>

                  <div className="flex flex-col w-full sm:w-1/2">
                    <label className="font-bold">Email</label>
                    <input
                      type="email"
                      className="w-full py-1 border outline-none pl-2"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex flex-col w-full sm:w-1/2">
                    <label className="font-bold">College Name</label>
                    <input
                      type="text"
                      className="w-full py-1 border outline-none pl-2"
                    />
                  </div>

                  <div className="flex flex-col w-full sm:w-1/2">
                    <label className="font-bold">City</label>
                    <input
                      type="text"
                      className="w-full py-1 border outline-none pl-2"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex flex-col w-full sm:w-1/2">
                    <label className="font-bold">Course</label>
                    <select className="w-full py-1 border outline-none pl-2">
                      <option>B. Tech</option>
                      <option>M. Tech</option>
                      <option>MCA</option>
                      <option>BCom</option>
                      <option>BSc</option>
                      <option>Diploma</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-full sm:w-1/2">
                    <label className="font-bold">Branch</label>
                    <select className="w-full py-1 border outline-none pl-2">
                      <option>CSE</option>
                      <option>ECE</option>
                      <option>AI-ML</option>
                      <option>IT</option>
                      <option>Cyber Security</option>
                      <option>IOT</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <button className="w-full h-10 mt-4 bg-red-500 text-white hover:bg-white hover:text-red-500 transition">
                  Submit
                </button>
              </form>
            </div>

            {/* Address */}
            <div className="mt-10 w-full max-sm:w-full sm:w-[90%] md:w-[45%] lg:w-auto">
              <span className="text-3xl font-bold">
                <span>OUR</span> <span className="text-red-500">ADDRESS</span>
              </span>

              <hr className="w-16 mt-2 mb-10 border-0 h-1 bg-red-500" />

              <div className="flex flex-col gap-6">
                <div className="border flex items-center p-4 gap-5">
                  <HiOutlinePhone className="w-8 h-8 text-red-500 shrink-0" />
                  <div>
                    <span className="font-semibold">Phone</span>
                    <p>91-9676190678</p>
                  </div>
                </div>

                <div className="border flex items-start p-4 gap-5">
                  <HiOutlineLocationMarker className="w-8 h-8 text-red-500 shrink-0" />
                  <div>
                    <span className="font-semibold">Address</span>
                    <p className="max-w-55 sm:max-w-[320px]">
                      407, 4th Floor, Pavani Prestige (R.S Brothers) Building,
                      Ameerpet, Opposite Image Hospital & Beside KLM Fashion
                      Mall. Hyderabad, Telangana – 500016, India
                    </p>
                  </div>
                </div>

                <div className="border flex items-center p-4 gap-5">
                  <HiOutlineMail className="w-8 h-8 text-red-500 shrink-0" />
                  <div>
                    <span className="font-semibold">Email</span>
                    <p>info@truprojects.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <GoogleMap />
        </div>

        <Footer />
      </div>
    </>
  );
}
