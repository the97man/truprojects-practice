import React from "react";
import { ServicesData } from "../data/ServicesData";

export default function Services() {
  return (
    <div className="mt-20">
      <span className="ml-15 text-3xl font-bold">
        <span>OUR</span> <soan className="text-red-500">SERVICES</soan>
      </span>

      <hr class="w-13 mt-2 ml-15 border-0 h-1 bg-red-500" />

      <div className="max-w-7xl mx-auto py-10 px-4">
        <div
          className="grid gap-6 mb-10
               grid-cols-2
               md:grid-cols-3
               lg:grid-cols-4
               place-items-center"
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
    </div>
  );
}
