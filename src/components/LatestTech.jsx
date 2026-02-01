import LatestTechData from "../data/LatestTechData.js";
import { Link } from "react-router-dom";

export default function LatestTech() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading */}
      <span className="text-3xl font-bold">
        <span>LATEST</span> <span className="text-red-500">TECHNOLOGIES</span>
      </span>

      <hr className="w-16 mt-2 border-0 h-1 bg-red-500" />

      {/* Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {LatestTechData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col sm:flex-row gap-4 items-center sm:items-start border rounded-lg p-5 shadow hover:shadow-md transition"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full md:w-80"
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>

              <ul className="flex flex-row gap-3">
                {card.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="text-red-500 hover:underline text-sm block"
                    >
                      <span className="block font-medium">{link.top}</span>
                      <span className="block">{link.bottom}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
