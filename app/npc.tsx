"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // npm i lucide-react

type GalleryItem = {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
};

const galleryData: GalleryItem[] = [
  {
    id: 1,
    imageSrc: "/asset/NPC/npc1.png",
    title: "CHÚ TIỂU",
    description:
      "Là một cậu nhóc ở chùa Linh Tự luôn lên núi hái thuốc và tìm khoáng sản chủ yếu là Ngọc Thạch.",
  },
  {
    id: 2,
    imageSrc: "/asset/NPC/npc2.png",
    title: "CÔ ĐỒNG",
    description:
      "Vị thầy thuốc gieo quẻ cho nhân vật mỗi khi gặp mặt, Có bán các vật dụng trừ tà có tính sát thương cao.",
  },
  {
    id: 3,
    imageSrc: "/asset/NPC/npc3.png",
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
    <div className="relative flex w-full h-[80rem] items-center justify-center overflow-hidden">
      {/* Background with texture */}
      <div className="absolute w-[100rem] h-[45rem] bg-background border-4 border-foreground shadow-2xl rounded-3xl overflow-hidden">
        <Image
          src="/asset/Canva-82.png"
          alt="Background image"
          fill
          className="object-cover opacity-60"
        ></Image>
      <button
        onClick={handlePrev}
        className="absolute left-10 top-1/2 z-40 -translate-y-1/2 rounded-sm bg-foreground p-2 text-white transition-colors duration-300 hover:bg-black"
        aria-label="Previous Image"
      >
        <ChevronLeft size={64} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-10 top-1/2 z-20 -translate-y-1/2 rounded-sm bg-foreground p-2 text-white transition-colors duration-300 hover:bg-black"
        aria-label="Next Image"
      >
        <ChevronRight size={64} />
      </button>
      </div>
       {/* Side Navigation Buttons */}
      {/* Text Overlay */}
      <div
        className="flex flex-col justify-center items-center
       text-white z-20 max-w-sm p-20"
      >
        <div className="absolute w-[60rem] h-[75rem]">
          <Image
            src="/asset/scroll.png"
            alt="Background image"
            fill
            className="object-cover -z-10"
          ></Image>
        </div>
        <div className="relative w-[20rem] h-[20rem]">
          <h2 className="text-5xl writing font-bold uppercase text-foreground">
            {currentItem.title}
          </h2>
          <p className="mt-2 text-xl text-background font-bold">
            {currentItem.description}
          </p>
        </div>
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
                <div className="relative w-[70rem] h-[40rem]">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    className="object-contain object-center cursor-pointer group transform transition-transform duration-300 hover:scale-110"
                    fill
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-80 left-11/19 z-20 flex -translate-x-1/2 items-center gap-8">
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
