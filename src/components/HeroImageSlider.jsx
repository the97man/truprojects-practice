import { useEffect, useState } from "react";
import { SliderData } from "../data/SliderData";

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % SliderData.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + SliderData.length) % SliderData.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="mt-35 relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      <a href={SliderData[index].href}>
        <img
          src={SliderData[index].img}
          alt={SliderData[index].alt}
          className="w-full h-full sm:h-80 object-cover max-sm:hidden"
        />
      </a>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        aria-label="Previous slide"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        aria-label="Next slide"
      >
        ❯
      </button>

      {/* Slide Identifier */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {SliderData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
