import React from "react";
import GoogleMapData from "../data/GoogleMapData.js";

export default function GoogleMap() {
  return (
    <div
      id={GoogleMapData.id}
      className={`w-full h-[400px] ${GoogleMapData.className} mt-10`}
    >
      <iframe
        src={GoogleMapData.src}
        title={GoogleMapData.title}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0"
      ></iframe>
    </div>
  );
}
