"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // npm i lucide-react

import canva82 from "../public/asset/Canva-82.png";
import mada from "../public/asset/ma/Ma_da.png";
import madoi from "../public/asset/ma/Ma_Doi.png";
import malai from "../public/asset/ma/Ma_lai.png";
import mamatmam from "../public/asset/ma/Ma_mat_mam.png";
import nguoica from "../public/asset/ma/Nguoi_ca.png";
import ongbabi from "../public/asset/ma/Ong_3Bi.png";
import quy1gio from "../public/asset/ma/Quy_1_Gio.png";
import quynhaptrang1 from "../public/asset/ma/Quy_nhap_trang_1.png";
import quynhaptrang2 from "../public/asset/ma/Quy_nhap_trang_2.png";
import quysong from "../public/asset/ma/Quy_Song.png";
import thantrung from "../public/asset/ma/Than_Trung.png";
import vongnhi from "../public/asset/ma/Vong_nhi.png";

type Mob = {
  id: number;
  imageSrc: StaticImageData;
  title: string;
};

const galleryData: Mob[] = [
  {
    id: 1,
    imageSrc: mada,
    title: "Ma DA",
  },
  {
    id: 2,
    imageSrc: madoi,
    title: "MA ĐÓI",
  },
  {
    id: 3,
    imageSrc: malai,
    title: "MA LAI",
  },
  {
    id: 4,
    imageSrc: mamatmam,
    title: "MA MẶT MÂM",
  },
  {
    id: 5,
    imageSrc: nguoica,
    title: "NGƯỜI CÁ",
  },
  {
    id: 6,
    imageSrc: ongbabi,
    title: "ÔNG BA BỊ",
  },
  {
    id: 7,
    imageSrc: quy1gio,
    title: "QUỶ 1 GIÒ",
  },
  {
    id: 8,
    imageSrc: quynhaptrang1,
    title: "QUỶ NHẬP TRÀNG (NAM)",
  },
  {
    id: 9,
    imageSrc: quynhaptrang2,
    title: "QUỶ NHẬP TRÀNG (NỮ)",
  },
  {
    id: 10,
    imageSrc: quysong,
    title: "QUỶ SÔNG",
  },
  {
    id: 11,
    imageSrc: thantrung,
    title: "THẦN TRÙNG",
  },
  {
    id: 12,
    imageSrc: vongnhi,
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
    <div className="relative flex flex-col md:flex-row items-center md:justify-center">
      {/* Main Gallery Container - This is the viewport for the slider */}
      <div className="flex flex-col md:flex-row justify-center items-center relative w-full z-10 p-10">
        <div className="h-full bg-background border-4 border-foreground shadow-2xl rounded-3xl ">
          <Image
            src={canva82}
            alt="Background image"
            fill
            quality={50}
            placeholder="blur"
            className="object-cover"
          ></Image>
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-10 top-1/2 z-40 -translate-y-1/2 rounded-sm bg-foreground p-2 text-white transition-colors duration-300 hover:bg-black"
            aria-label="Previous Image"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-10  top-1/2 z-20 -translate-y-1/2 rounded-sm bg-foreground p-2 text-white transition-colors duration-300 hover:bg-black"
            aria-label="Next Image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center z-10 w-3/4  ">
          <h2 className="text-5xl sm:text-6xl md:text-7xl writing font-bold uppercase text-foreground">
            {currentItem.title}
          </h2>
        </div>
        {/* Viewport for the sliding track */}
        <div className="flex justify-center items-center h-full w-5/7 overflow-hidden">
          {/* The track that contains all images and slides */}
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {galleryData.map((item) => (
              <div
                key={item.id}
                className="flex justify-center items-center w-full h-full flex-shrink-0"
              >
                <div className="relative w-[15rem] sm:w-[20rem] h-[30rem] md:w-[60rem]">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    className="object-contain cursor-pointer group transform transition-transform duration-300 hover:scale-110"
                    fill
                    quality={50}
                    placeholder="blur"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-8">
        <button
          onClick={handlePrev}
          className="text-red-600/50 hover:text-red-600 transition-colors duration-300"
          aria-label="Previous Image"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-2">
          {galleryData.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-2 transition-all duration-300 ${
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
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
