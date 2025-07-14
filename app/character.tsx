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
    <div>
      <div className="flex w-[100dvw] items-center justify-center">
        <div className="absolute w-[100dvw] h-[9rem] z-[-5] border-y-4 bg-background">
          <Image
            src={canva8}
            alt="Logo"
            fill
            quality={50}
            placeholder="blur"
            className="object-cover object-center"
          />
        </div>
        <div className="relative w-[100rem] h-[30rem] z-[-5]">
          <Image
            src={dialogue}
            alt="Logo"
            fill
            quality={50}
            placeholder="blur"
            className="object-cover"
          />
        </div>
        {/* title */}
        <h1 className="absolute title mb-10 text-foreground text-8xl font-extrabold z-10">
          Nhân vật
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full border-yellowground overflow-hidden">
        {/* --- Main Container --- */}
        <div className="relative w-[117rem] h-[70rem] text-white font-lato backdrop-blur-md">
          <Image
            src={canva6}
            alt="Background"
            fill
            quality={50}
            placeholder="blur"
            className="object-contain opacity-50"
          />
          <div className="absolute w-[117rem] h-[70rem] border-foreground rounded-3xl border-5 overflow-hidden ">
            <Image
              src={khung}
              alt="Background image"
              fill
              quality={50}
              placeholder="blur"
              className="object-contain object-center"
            ></Image>
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-16">
            <main className="flex self-center justify-self-center justify-center h-[50rem] items-center gap-32">
              {/* --- Character Avatar (Left Side) --- */}
              <div className="h-[60rem] lg:col-span-1 flex justify-center relative">
                {/* <div className="absolute inset-0 bg-cyan-500/20 blur-3xl transform -rotate-12 -translate-x-10"></div>
            <div className="absolute inset-0 bg-red-500/20 blur-3xl transform rotate-12 translate-x-10"></div> */}
                <div className="w-[40rem] h-[20rem] rounded-lg transition-all duration-500 ease-in-out">
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
                  <h2 className="writing text-yellowground text-7xl font-bold tracking-wider mb-4 transition-opacity duration-500">
                    {selectedCharacter.name.toUpperCase()}
                  </h2>
                  <p className="leading-relaxed transition-opacity duration-500 h-[30rem] ">
                    {selectedCharacter.story}
                  </p>
                </div>

                {/* --- Character Icon Selection --- */}
                <div className="w-full max-w-lg">
                  <h3 className="title text-2xl md:text-3xl font-bold tracking-wider mb-6 text-center lg:text-left">
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
                          className={`w-20 h-20 md:w-24 md:h-24 bg-foreground transition-all duration-300 border-2 rounded-lg ${
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
