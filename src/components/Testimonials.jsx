// import React from "react";

// export default function Testimonials() {
//   const [active, setActive] = useState(0);
//   return (
//     <section className="max-w-6xl mx-auto px-6 py-12">
//       {/* Heading */}
//       <span className="text-3xl font-bold">
//         <span className="text-red-500">TESTIMONIALS</span>
//       </span>

//       <hr className="w-16 mt-2 border-0 h-1 bg-red-500" />

//       {/* Slider */}
//       <div className="relative overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${active * 100}%)` }}
//         >
//           {testimonials.map((item, index) => (
//             <div key={index} className="min-w-full flex justify-center px-4">
//               <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl text-center">
//                 <img
//                   src={item.avatar}
//                   alt={item.name}
//                   className="w-16 h-16 rounded-full mx-auto mb-4"
//                 />
//                 <p className="text-gray-600 mb-4">“{item.text}”</p>
//                 <h4 className="font-semibold">{item.name}</h4>
//                 <span className="text-sm text-gray-400">{item.role}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center mt-6 gap-2">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActive(index)}
//             className={`h-3 w-3 rounded-full transition ${
//               active === index ? "bg-red-500" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
