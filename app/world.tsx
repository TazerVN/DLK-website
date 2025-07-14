"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // npm i lucide-react
import linhtu from "../public/asset/world/1.png";
import hochuongthan from "../public/asset/world/2.png";
import hoasonthach from "../public/asset/world/3.png";
import rungulinh from "../public/asset/world/4.png";
import quylinhtran from "../public/asset/world/5.png";

type GalleryItem = {
  id: number;
  imageSrc: StaticImageData;
  title: string;
  description: string;
};

const galleryData: GalleryItem[] = [
  {
    id: 1,
    imageSrc: linhtu,
    title: "LINH TỰ",
    description: "Cây Linh Khí.",
  },
  {
    id: 2,
    imageSrc: hochuongthan,
    title: "HỒ CHUÔNG THẦN",
    description:
      "Nơi chiếc chuông cổ đang cố gắng thanh tẩy vùng đất xung quanh nó, dù cho bị tàn phá từ bọn quỷ dữ.",
  },
  {
    id: 3,
    imageSrc: hoasonthach,
    title: "HỎA SƠN THẠCH",
    description:
      "Những ngọn núi lửa của vùng đất Hoả Quốc bị bọn quỷ lây lan và phát triển, từng thớ thịt ngang càng lan rộng hơn.",
  },
  {
    id: 4,
    imageSrc: rungulinh,
    title: "RỪNG U LINH",
    description:
      "Khu rừng tối ám thấp và ma mị. Xương người và động vật chết ở khắp mọi nơi, không khí ngột ngạt như có ai đang nhìn.",
  },
  {
    id: 5,
    imageSrc: quylinhtran,
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
    <div className="relative flex w-full h-[100dvh] items-center justify-center overflow-hidden">
      {/* Background with texture */}
      {/* <div className="absolute flex just w-3/4 h-[63rem] border-4 border-foreground shadow-2xl rounded-3xl overflow-hidden">
        <Image
          src={khung}
          alt="Background image"
          fill
          quality={50}
          placeholder="blur"
          className="object-cover z-20 backdrop-brightness-90"
        ></Image>
      </div> */}
      <div className="w-3/4 flex">
        {/* Text Overlay */}
        <div className="flex flex-col items-center justify-center md:w-[35rem] h-[60rem] w-full relative backdrop-brightness-50 p-4 sm:p-8 md:p-16 lg:p-30 z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl writing font-bold uppercase text-yellowground">
            {currentItem.title}
          </h2>
          <p className="mt-2 text-base sm:text-lg md:text-xl text-white">
            {currentItem.description}
          </p>
        </div>

        {/* Main Gallery Container - This is the viewport for the slider */}
        <div className="absolute w-3/4 flex justify-center items-center border-4 border-foreground">
        {/* Navigation Controls */}
        <div className="absolute -bottom-1/4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-8">
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
          {/* Viewport for the sliding track */}
          <div className="w-[90dvw] h-full overflow-hidden">
            {/* The track that contains all images and slides */}
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryData.map((item) => (
                <div key={item.id} className="w-full h-full flex-shrink-0">
                  <div className="relative w-[100dvw] h-[60rem]">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      quality={50}
                      placeholder="blur"
                      className="object-cover -z-10"
                      objectPosition="center"
                      fill
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Side Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute -left-10 top-1/2 z-20 -translate-y-1/2 rounded-sm bg-foreground p-2 text-white transition-colors duration-300 hover:bg-black"
              aria-label="Previous Image"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={handleNext}
              className="absolute -right-10 top-1/2 z-20 -translate-y-1/2 rounded-sm bg-foreground p-2 text-white transition-colors duration-300 hover:bg-black"
              aria-label="Next Image"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
