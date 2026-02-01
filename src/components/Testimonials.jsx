import React, { useState } from "react";
import { TestimonialsData } from "../data/TestimonialsData.js";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  // Navigate to previous testimonial
  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? TestimonialsData.length - 1 : prev - 1));
  };

  // Navigate to next testimonial
  const nextTestimonial = () => {
    setCurrent((prev) => (prev === TestimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading */}
      <span className="text-3xl font-bold">
        <span className="text-red-500">TESTIMONIALS</span>
      </span>

      <hr className="w-16 mt-2 border-0 h-1 bg-red-500" />

      <div className="mt-10 max-w-4xl mx-auto px-4 relative">
        {/* Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100 transition"
          aria-label="Previous testimonial"
        >
          ◀
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100 transition"
          aria-label="Next testimonial"
        >
          ▶
        </button>

        {/* Testimonial Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <img
            src={TestimonialsData[current].image}
            alt={TestimonialsData[current].name}
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <p className="text-gray-600 italic mb-4">
            "{TestimonialsData[current].text}"
          </p>
          <h3 className="text-lg font-semibold">
            {TestimonialsData[current].name}
          </h3>
          <span className="text-sm text-gray-500">
            {TestimonialsData[current].role}
          </span>
        </div>
      </div>
    </section>
  );
}
