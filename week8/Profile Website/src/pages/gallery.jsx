import React from "react";
import Navbar from "../component/Navbar";

const img = [
  "https://valor-dictus.com/wp-content/uploads/2023/12/Screenshot-2023-12-01-12.24.59-PM-600x340.png",
  "https://valor-dictus.com/wp-content/uploads/2023/12/Screenshot-2023-12-01-12.24.59-PM-600x340.png",
  "https://valor-dictus.com/wp-content/uploads/2023/12/Screenshot-2023-12-01-12.24.59-PM-600x340.png",
  "https://valor-dictus.com/wp-content/uploads/2023/12/Screenshot-2023-12-01-12.24.59-PM-600x340.png",
  "https://valor-dictus.com/wp-content/uploads/2023/12/Screenshot-2023-12-01-12.24.59-PM-600x340.png",
  "https://valor-dictus.com/wp-content/uploads/2023/12/Screenshot-2023-12-01-12.24.59-PM-600x340.png",
  
];

export default function Gallery() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-[#FFD6E9]">
        <h2 className="pt-20 md:pt-0 text-3xl text-[#570228] font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center w-full max-w-6xl">
          {img.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={src}
                alt={`img ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
