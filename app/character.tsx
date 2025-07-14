"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import thosanicon from "../public/asset/char/archericon.png";
import thosanavatar from "../public/asset/char/archergood2.png";
import fishermanicon from "../public/asset/char/fishermanicon.png";
import fishermanavatar from "../public/asset/char/fishermangood.png";
import generalicon from "../public/asset/char/generalicon.png";
import generalavatar from "../public/asset/char/generalgood.png";
import monkicon from "../public/asset/char/monkicon.png";
import monkavatar from "../public/asset/char/monkgood.png";

import canva8 from "../public/asset/Canva-8.png";
import dialogue from "../public/asset/dialogue.png";
import canva6 from "../public/asset/Canva-6.png";
import khung from "../public/asset/Khung.png";

interface Character {
  id: number;
  name: string;
  icon: StaticImageData;
  avatar: StaticImageData;
  story: string;
}

const characters: Character[] = [
  {
    id: 1,
    name: "Thợ Săn",
    icon: thosanicon,
    avatar: thosanavatar,
    story:
      "Là Hoàng Hậu của vị vua triều đại cũ, sau khi vua băng hà một cách bí ẩn. Nàng về thôn quê trên vùng núi xa vì trước đây nàng là trưởng thôn của một bộ lạc săn quỷ. Là một tay bắn nỏ cừ khôi với thần thái của nữ chiến binh, việc hạ độc bọn quỷ khi chúng công không để ý là điều dễ dàng.",
  },
  {
    id: 2,
    name: "Ngư Dân",
    icon: fishermanicon,
    avatar: fishermanavatar,
    story:
      "Sinh sống ở làng chài, sau khi thảm hoạ xảy ra gia đình anh bị bọn quỷ nuốt trọn. Mang nỗi căm hận anh quyết tâm đi tu và diệt trừ quỷ dữ. Hình xăm trên người anh mang ấn chú trừ quỷ.",
  },
  {
    id: 3,
    name: "Tướng Quân",
    icon: generalicon,
    avatar: generalavatar,
    story:
      "Vị Tướng Quân trong triều, là người được ví như tấm khiên bất bại. Càn quét giặc ngoại xâm mang nhiều chiến tích cho triều đình. Nhưng sau khi vị Vua cũ qua đời bí ẩn, anh tự trách đã không bảo vệ được ngài rồi rời đi ẩn cư trừ quỷ giúp dân.",
  },
  {
    id: 4,
    name: "Thiền Sư",
    icon: monkicon,
    avatar: monkavatar,
    story:
      "Một Vị vua triều đại cũ, sau khi biết được bí mật đang được ẩn giấu đã giả chết để tìm ra sự thật về phong ấn ngàn năm. Là sinh linh được luân hồi qua hàng ngàn năm hòng ngăn chặn kẻ phá hoại phong ấn.",
  },
];

// export default function Character() {
//   return (
//     <div className="flex rounded-lg rows-start-3 row-end-4 overflow-hidden justify-center items-center border-4 border-yellowground">
//       <div className="relative w-[100dvw] h-[100dvh] rounded-lg overflow-hidden">
//         <Image
//           className="object-cover"
//           src={"/BG/final/final4.png"}
//           alt="Background image"
//           fill
//         ></Image>
//       </div>
//       <div className="absolute top-30 h-[90dvh] w-dvw inset-0 grid grid-cols-[2fr_1fr] grid-rows-2 justify-center items-center overflow-hidden">

//       </div>
//     </div>
//   );
// }

export default function Character() {
  // State to track the currently selected character. Initialize with the first character.
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(
    characters[0]
  );

  return (
    <div className="h-full">
      <div className="flex w-full items-center justify-center">
        <div className="absolute h-[9rem] w-full z-[-5] border-y-4 bg-background">
          <Image
            src={canva8}
            alt="Logo"
            fill
            quality={50}
            placeholder="blur"
            className="object-cover object-center"
          />
        </div>
        <div className="relative w-[30rem] md:w-[60rem] h-[40rem] z-[-5]">
          <Image
            src={dialogue}
            alt="Logo"
            fill
            quality={50}
            placeholder="blur"
            className="object-contain"
          />
        </div>
        {/* title */}
        <h1 className="absolute title mb-6 text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold z-10">
          Nhân vật
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full border-yellowground p-20">
        {/* --- Main Container --- */}
        <div className="relative w-dvw md:w-[80rem] md:h-[70rem] lg:w-[127rem] text-white font-lato backdrop-blur-md p-20">
          <div className="flex items-center justify-center p-4 md:p-16">
            <main className="flex flex-col md:flex-row self-center justify-self-center justify-center items-center gap-8 md:gap-32">
              <div className="absolute w-full h-full border-foreground rounded-3xl border-5 overflow-hidden">
                <Image
                  src={canva6}
                  alt="Background"
                  fill
                  quality={50}
                  placeholder="blur"
                  className="object-cover opacity-50"
                />
                <Image
                  src={khung}
                  alt="Background image"
                  fill
                  quality={50}
                  placeholder="blur"
                  className="object-cover object-center"
                ></Image>
              </div>
              {/* --- Character Avatar (Left Side) --- */}
              <div className="h-[20rem] md:h-[60rem] w-3/4 md:w-auto lg:col-span-1 flex justify-center relative">
                <div className="w-[20rem] md:w-[30rem] h-1/2 rounded-lg transition-all duration-500 ease-in-out">
                  <Image
                    src={selectedCharacter.avatar}
                    alt={`${selectedCharacter.name} Avatar`}
                    key={selectedCharacter.id} // Ad
                    fill
                    quality={50}
                    placeholder="blur"
                    className="object-contain hover:scale-110 transition-all "
                    // clad key to re-trigger animations on change
                  />
                </div>
              </div>

              {/* --- Character Details & Selection (Right Side) --- */}
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-8">
                {/* --- Character Info --- */}
                <div className="text-center lg:text-left w-full max-w-lg">
                  <h2 className="writing text-yellowground text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider mb-4 transition-opacity duration-500">
                    {selectedCharacter.name.toUpperCase()}
                  </h2>
                  <p className="leading-relaxed transition-opacity duration-500 h-auto md:h-[30rem] text-sm sm:text-base md:text-lg lg:text-xl">
                    {selectedCharacter.story}
                  </p>
                </div>

                {/* --- Character Icon Selection --- */}
                <div className="w-full max-w-lg">
                  <h3 className="title text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wider mb-6 text-center lg:text-left">
                    Nhân vật
                  </h3>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    {characters.map((char) => (
                      <div
                        key={char.id}
                        onClick={() => setSelectedCharacter(char)}
                        className="cursor-pointer group transform transition-transform duration-300 hover:scale-110"
                        title={char.name}
                      >
                        <div
                          className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-foreground transition-all duration-300 border-2 rounded-lg ${
                            selectedCharacter.id === char.id
                              ? "border-red-500 scale-110"
                              : "border-transparent group-hover:border-white/50"
                          }`}
                        >
                          <div className="w-full h-full relative">
                            <Image
                              src={char.icon}
                              alt={`${char.name} Icon`}
                              fill
                              quality={50}
                              placeholder="blur"
                              className="object-cover rounded-lg"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
