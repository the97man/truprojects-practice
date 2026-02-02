// import { SocialLinksData } from "../data/SocialLinksData";

// const TopNavbar = () => {
//   return (
//     <nav className="fixed top-0 z-9999 h-15 w-full bg-gray-950 flex items-center pr-8">
//       <div className="w-full max-w-7xl mx-auto flex items-center px-4">
//         <div className="flex items-center gap-6">
//           {/* Contact Info */}
//           <div className="flex flex-col md:flex-row text-gray-100">
//             <p>
//               <span className="cursor-pointer">91-9676190678</span>
//               &nbsp; &nbsp; info@truprojects.in
//             </p>
//           </div>

//           {/* Social Icons */}
//           <div className="flex items-center gap-3">
//             {SocialLinksData.map((icon, index) => (
//               <a
//                 key={index}
//                 href={icon.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={icon.img}
//                   alt={icon.alt}
//                   className="h-5 w-5 object-contain hover:opacity-80 transition"
//                 />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       <button className="text-red-500 px-4 text-xl border-solid border-2 border-red-500 rounded-lg max-sm:text-sm py-2 whitespace-nowrap">
//         Register Now
//       </button>
//     </nav>
//   );
// };

// export default TopNavbar;

// import { SocialLinksData } from "../data/SocialLinksData";

// const TopNavbar = () => {
//   return (
//     <nav className="fixed top-0 z-50 w-full bg-gray-950">
//       <div className="max-w-7xl mx-auto px-4 py-3">
//         {/* Wrapper */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//           {/* Left: Contact info */}
//           <div className="text-gray-100 text-sm text-center md:text-left">
//             <p>
//               <span className="cursor-pointer">91-9676190678</span>
//               &nbsp; | &nbsp; info@truprojects.in
//             </p>
//           </div>

//           {/* Right: Register button */}
//           <div className="flex justify-center md:justify-end">
//             <button className="text-red-500 px-4 py-2 text-sm md:text-base border-2 border-red-500 rounded-lg whitespace-nowrap">
//               Register Now
//             </button>
//           </div>

//           {/* Social Icons */}
//           <div className="flex justify-center gap-4 md:justify-end md:gap-3">
//             {SocialLinksData.map((icon, index) => (
//               <a
//                 key={index}
//                 href={icon.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={icon.img}
//                   alt={icon.alt}
//                   className="h-5 w-5 object-contain hover:opacity-80 transition"
//                 />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default TopNavbar;

import { SocialLinksData } from "../data/SocialLinksData";

const TopNavbar = () => {
  return (
    <nav className="fixed top-0 z-50 h-15 w-full bg-gray-950 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* DESKTOP LAYOUT (unchanged) */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-6 text-gray-100">
            <p>
              <span className="cursor-pointer">91-9676190678</span>
              &nbsp;&nbsp; info@truprojects.in
            </p>

            <div className="flex items-center gap-3">
              {SocialLinksData.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={icon.img}
                    alt={icon.alt}
                    className="h-5 w-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          <button className="text-red-500 px-4 py-2 text-sm border-2 border-red-500 rounded-lg">
            Register Now
          </button>
        </div>

        {/* MOBILE + TABLET ONLY */}
        <div className="flex flex-col gap-2 md:hidden">
          {/* Contact info */}
          <p className="text-gray-100 text-xs text-center">
            91-9676190678 &nbsp; | &nbsp; info@truprojects.in
          </p>

          {/* Icons + Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {SocialLinksData.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={icon.img}
                    alt={icon.alt}
                    className="h-4 w-4 object-contain"
                  />
                </a>
              ))}
            </div>

            <button className="text-red-500 px-3 py-1 text-xs border-2 border-red-500 rounded-md">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
