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
    imageSrc: "/asset/world/1.png",
    title: "LINH TỰ",
    description: "Cây Linh Khí.",
  },
  {
    id: 2,
    imageSrc: "/asset/world/2.png",
    title: "HỒ CHUÔNG THẦN",
    description:
      "Nơi chiếc chuông cổ đang cố gắng thanh tẩy vùng đất xung quanh nó, dù cho bị tàn phá từ bọn quỷ dữ.",
  },
  {
    id: 3,
    imageSrc: "/asset/world/3.png",
    title: "HỎA SƠN THẠCH",
    description:
      "Những ngọn núi lửa của vùng đất Hoả Quốc bị bọn quỷ lây lan và phát triển, từng thớ thịt ngang càng lan rộng hơn.",
  },
  {
    id: 4,
    imageSrc: "/asset/world/4.png",
    title: "RỪNG U LINH",
    description:
      "Khu rừng tối ám thấp và ma mị. Xương người và động vật chết ở khắp mọi nơi, không khí ngột ngạt như có ai đang nhìn.",
  },
  {
    id: 5,
    imageSrc: "/asset/world/5.png",
    title: "QUỶ LINH TRẤN",
    description:
      "Chúng đã chiếm từng thị trấn và nuốt trọn những khu nhà. Chúng liên kết lại thành một mạng lưới để dễ dàng quan sát hơn.",
  },
];

export default function World() {
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
      <div className="absolute flex just w-[105rem] h-[63rem] border-4 border-foreground shadow-2xl rounded-3xl overflow-hidden">
        <Image
          src="/asset/Khung.png"
          alt="Background image"
          fill
          className="object-contain z-20 backdrop-brightness-90"
        ></Image>
      </div>
      <div className="w-[100rem] flex">
        {/* Text Overlay */}
        <div className="flex flex-col  items-center justify-center w-[35rem] h-[60rem] relative backdrop-brightness-50 p-30 z-10">
          <h2 className="text-5xl writing font-bold uppercase text-yellowground">
            {currentItem.title}
          </h2>
          <p className="mt-2 text-xl text-white">{currentItem.description}</p>
        </div>

        {/* Main Gallery Container - This is the viewport for the slider */}
        <div className="absolute w-[100rem] flex justify-center items-center">
          {/* Viewport for the sliding track */}
          <div className="w-[110rem] h-full overflow-hidden">
            {/* The track that contains all images and slides */}
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryData.map((item) => (
                <div key={item.id} className="w-full h-full flex-shrink-0">
                  <div className="relative w-[100rem] h-[60rem]">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      className="object-cover -z-10"
                      fill
                    />
                  </div>
                </div>
              ))}
            </div>
      {/* Side Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-sm bg-foreground p-2 text-white transition-colors duration-300 hover:bg-black"
        aria-label="Previous Image"
      >
        <ChevronLeft size={64} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-sm bg-foreground p-2 text-white transition-colors duration-300 hover:bg-black"
        aria-label="Next Image"
      >
        <ChevronRight size={64} />
      </button>
          </div>
        </div>
      </div>


      {/* Navigation Controls */}
      <div className="absolute bottom-60 left-1/2 z-20 flex -translate-x-1/2 items-center gap-8">
        <button
          onClick={handlePrev}
          className="text-foreground/50 hover:text-foreground transition-colors duration-300"
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
          className="text-foreground/50 hover:text-foreground transition-colors duration-300"
          aria-label="Next Image"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
