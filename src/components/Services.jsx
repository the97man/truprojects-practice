import { ServicesData } from "../data/ServicesData";

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading */}
      <span className="text-3xl font-bold">
        <span>OUR</span> <span className="text-red-500">SERVICES</span>
      </span>

      <hr className="w-16 mt-2 border-0 h-1 bg-red-500" />

      {/* Images with titles */}
      <div className="py-10">
        <div
          className="
            grid gap-6 mb-10
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            place-items-center
          "
        >
          {ServicesData.map((card, index) => (
            <div key={index} className="w-full flex justify-center">
              <div className={`${card.type}-card h-full text-center p-6`}>
                <img
                  src={card.img}
                  alt={card.alt}
                  className="mx-auto mb-4 w-20 sm:w-24 md:w-28 object-contain"
                />
                <h2 className="text-lg font-semibold">{card.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
