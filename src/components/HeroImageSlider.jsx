import { useEffect, useState } from "react";
import HERO1 from "../assets/hero1.jpg";
import HERO2 from "../assets/hero2.jpg";
import HERO3 from "../assets/hero3.jpg";

export default function ImageSlider() {
  const slides = [
    { img: HERO1, alt: "Hero Image 1", href: "#" },
    { img: HERO2, alt: "Hero Image 2", href: "#" },
    { img: HERO3, alt: "Hero Image 3", href: "#" },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="top-35 relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg max-sm:hidden">
      {/* Image with link */}
      <a href={slides[index].href}>
        <img
          src={slides[index].img}
          alt={slides[index].alt}
          className="w-full h-64 sm:h-80 object-cover transition-all duration-500"
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

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
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
