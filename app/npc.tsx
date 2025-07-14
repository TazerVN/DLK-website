"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // npm i lucide-react
import chutieu from "../public/asset/NPC/npc1.png";
import codong from "../public/asset/NPC/npc2.png";
import thodia from "../public/asset/NPC/npc3.png";
import canva82 from "../public/asset/Canva-82.png";
import scroll from "../public/asset/scroll.png";

type GalleryItem = {
  id: number;
  imageSrc: StaticImageData;
  title: string;
  description: string;
};

const galleryData: GalleryItem[] = [
  {
    id: 1,
    imageSrc: chutieu,
    title: "CHÚ TIỂU",
    description:
      "Là một cậu nhóc ở chùa Linh Tự luôn lên núi hái thuốc và tìm khoáng sản chủ yếu là Ngọc Thạch.",
  },
  {
    id: 2,
    imageSrc: codong,
    title: "CÔ ĐỒNG",
    description:
      "Vị thầy thuốc gieo quẻ cho nhân vật mỗi khi gặp mặt, Có bán các vật dụng trừ tà có tính sát thương cao.",
  },
  {
    id: 3,
    imageSrc: thodia,
    title: "THỔ ĐỊA",
    description:
      "Vị thần cai quản các vùng đất, Ông là người giúp chúng ta di chuyển nhanh hơn và bán các vật phẩm hỗ trợ.",
  },
];

export default function NPC() {
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
    <div className="relative flex flex-col md:flex-row mt-40">
      {/* Main Gallery Container - This is the viewport for the slider */}
      <div className="flex flex-col md:flex-row items-center justify-center relative w-full h-2/3 z-10 bg-background">
        <div className="flex bg-background shadow-2xl rounded-3xl ">
          <Image
            src={canva82}
            alt="Background image"
            fill
            quality={50}
            placeholder="blur"
            className="object-cover opacity-60"
          ></Image>
          <button
            onClick={handlePrev}
            className="absolute left-10 top-1/2 z-40 -translate-y-1/2 rounded-sm bg-foreground p-2 text-white transition-colors duration-300 hover:bg-black"
            aria-label="Previous Image"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-10 top-1/2 z-20 -translate-y-1/2 rounded-sm bg-foreground p-2 text-white transition-colors duration-300 hover:bg-black"
            aria-label="Next Image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center z-10 w-3/4 p-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl writing font-bold uppercase text-foreground">
            {currentItem.title}
          </h2>
          <p className="mt-2 text-base sm:text-lg md:text-xl text-background font-bold h-20 md:w-1/2">
            {currentItem.description}
          </p>
        </div>
        {/* Viewport for the sliding track */}
        <div className="flex justify-center items-center w-3/4 overflow-hidden">
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
                <div className="relative w-[40rem] md:h-[70rem] md:w-[80rem] h-[30rem]">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    className="object-contain object-center cursor-pointer group transform transition-transform duration-300 hover:scale-110"
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
      <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 items-center gap-8">
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
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
