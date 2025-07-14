"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // npm i lucide-react

type Mob = {
  id: number;
  imageSrc: string;
  title: string;
};

const galleryData: Mob[] = [
  {
    id: 1,
    imageSrc: "/asset/ma/Ma_da.png",
    title: "Ma DA",
  },
  {
    id: 2,
    imageSrc: "/asset/ma/Ma_doi.png",
    title: "MA ĐÓI",
  },
  {
    id: 3,
    imageSrc: "/asset/ma/Ma_lai.png",
    title: "MA LAI",
  },
  {
    id: 4,
    imageSrc: "/asset/ma/Ma_mat_mam.png",
    title: "MA MẶT MÂM",
  },
  {
    id: 5,
    imageSrc: "/asset/ma/Nguoi_ca.png",
    title: "NGƯỜI CÁ",
  },
  {
    id: 6,
    imageSrc: "/asset/ma/Ong_3Bi.png",
    title: "ÔNG BA BỊ",
  },
  {
    id: 7,
    imageSrc: "/asset/ma/Quy_1_Gio.png",
    title: "QUỶ 1 GIÒ",
  },
  {
    id: 8,
    imageSrc: "/asset/ma/Quy_nhap_trang_1.png",
    title: "QUỶ NHẬP TRÀNG (NAM)",
  },
  {
    id: 9,
    imageSrc: "/asset/ma/Quy_nhap_trang_2.png",
    title: "QUỶ NHẬP TRÀNG (NỮ)",
  },
  {
    id: 10,
    imageSrc: "/asset/ma/Quy_Song.png",
    title: "QUỶ SÔNG",
  },
  {
    id: 11,
    imageSrc: "/asset/ma/Than_Trung.png",
    title: "THẦN TRÙNG",
  },
  {
    id: 12,
    imageSrc: "/asset/ma/Vong_nhi.png",
    title: "VONG NHI",
  },
];

export default function Mob() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = galleryData[currentIndex];

  return (
    <div className="relative flex w-full h-[80rem] items-center justify-center overflow-hidden">
      {/* Background with texture */}
      <div className="absolute w-[110rem] h-[50rem] bg-background border-4 border-foreground rounded-2xl">
        <Image
          src="/asset/Canva-82.png"
          alt="Background image"
          fill
          quality={50}
          placeholder="blur"
          className="object-cover opacity-60"
        ></Image>
        {/* Side Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-[10] top-1/2 z-20 -translate-y-1/2 rounded-sm bg-foreground p-2 text-white transition-colors duration-300 hover:bg-black"
          aria-label="Previous Image"
        >
          <ChevronLeft size={64} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-[10] top-1/2 z-40 -translate-y-1/2 rounded-sm bg-foreground p-2 text-white transition-colors duration-300 hover:bg-black"
          aria-label="Next Image"
        >
          <ChevronRight size={64} />
        </button>
        {/* <Image
          src="/Map2/Khung.png"
          alt="Background image"
          fill
          className="object-cover object-center"
        ></Image> */}
      </div>
      {/* Main Gallery Container - This is the viewport for the slider */}
      <div className="relative max-w-4xl z-10">
        {/* Viewport for the sliding track */}
        <div className="w-full h-full overflow-hidden">
          {/* The track that contains all images and slides */}
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {galleryData.map((item) => (
              <div key={item.id} className="w-full h-full flex-shrink-0">
                <div className="relative w-[50rem] h-[35rem] ">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    quality={50}
                    placeholder="blur"
                    className="object-contain object-center cursor-pointer group transform transition-transform duration-300 hover:scale-110"
                    fill
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text Overlay */}
      <div
        className="flex flex-col justify-center items-center
             text-white z-20 max-w-sm w-[80rem] h-[20rem]"
      >
        <div className="relative w-[50rem] h-[20rem]">
          <Image
            src="/asset/dialogue.png"
            alt="Background image"
            fill
            className="object-cover -z-10"
            quality={50}
            placeholder="blur"
          ></Image>
        </div>
        <div className="absolute bottom-85 w-[30rem] h-[20rem]">
          <h2 className="text-5xl writing font-bold text-center uppercase text-foreground">
            {currentItem.title}
          </h2>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-85 left-1/2 z-20 flex -translate-x-1/2 items-center gap-8">
        <button
          onClick={handlePrev}
          className="text-red-600/50 hover:text-red-600 transition-colors duration-300"
          aria-label="Previous Image"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="flex items-center gap-2">
          {galleryData.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-8 transition-all duration-300 ${
                index === currentIndex ? "bg-red-600" : "bg-gray-700"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="text-red-600/50 hover:text-red-600 transition-colors duration-300"
          aria-label="Next Image"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
