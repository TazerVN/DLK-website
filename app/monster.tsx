"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import birdicon from "../public/asset/boss/bird.png";
import dragonicon from "../public/asset/boss/dragon.png";
import quyicon from "../public/asset/boss/turtle.png";
import lionicon from "../public/asset/boss/lion.png";
import canva8 from "../public/asset/Canva-8.png";
import dialogue from "../public/asset/dialogue.png";
import canva7 from "../public/asset/Canva-7.png";
import khung from "../public/asset/Khung.png";

interface Monster {
  id: number;
  name: string;
  icon: StaticImageData;
  story: string;
}

const monsters: Monster[] = [
  {
    id: 1,
    name: "PHỤNG",
    icon: birdicon,
    story:
      "Phượng hoàng được bắt nguồn từ nền văn hóa của Trung Hoa, được ví là loài chim đẹp nhất trong các loài chim. Phượng hoàng tuy được phân thành Phượng (con trống) và Hoàng (con mái) nhưng về sau không còn sự phân biệt rạch ròi như vậy nữa mà các đặc điểm được kết hợp lại với nhau và gọi chung là Phượng hoàng.",
  },
  {
    id: 2,
    name: "LONG",
    icon: dragonicon,
    story:
      "Rồng trong truyền thuyết được coi là con vật của trời, có quyền năng tối cao hơn các loài vật khác. Sự xuất hiện của Rồng được quan niệm là mang lại điều tốt lành, may mắn, thuận lợi và bình an. Người xưa quan niệm rồng là sứ giả đi lại với con người có thể gửi gắm những ước nguyện của cuộc sống như cầu mưa thuận gió hòa, cầu phồn thực sinh sôi...",
  },
  {
    id: 3,
    name: "QUY",
    icon: quyicon,
    story:
      "Rùa là con vật duy nhất có thật trong tự nhiên. Rùa là một loài bò sát lưỡng cư có tuổi thọ cao và khả năng sống trong một thời gian dài mà không cần tới thức ăn do đó được ví với phẩm chất thanh cao, thoát tục. Rùa từ lâu đã gắn liền với văn hóa người Việt thông qua câu chuyện thần Kim Quy giúp vua An Dương.",
  },
  {
    id: 4,
    name: "LÂN",
    icon: lionicon,
    story:
      "Lân là linh vật được biết đến thứ 2 sau Rồng. Dân gian cho rằng sự xuất hiện của Lân báo hiệu điềm lành, thái bình thịnh vượng sắp tới. Ngoài ra hình tượng Lân cũng được dùng để trấn giữ cửa nhà, hóa giải hung khí khi đối diện với cửa nhà khác, có ngã ba, ngã tư, góc nhọn, đường vòng chiếu thẳng vào nhà.",
  },
];

export default function Monster() {
  // State to track the currently selected monster. Initialize with the first monster.
  const [selectedMonster, setSelectedMonster] = useState<Monster>(monsters[0]);

  return (
    <div className="flex flex-col items-center w-full h-full gap-16 mt-32">
      <div className="flex w-full items-center justify-center">
        <div className="absolute w-full h-[9rem] border-y-4 bg-background z-10">
          <Image
            src={canva8}
            alt="Logo"
            fill
            quality={50}
            placeholder="blur"
            className="object-cover object-center"
          />
        </div>
        <div className="relative w-[30rem] md:w-[60rem] h-[40rem] z-10">
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
        <h1 className="absolute mb-6 title text-center text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold z-10">
          Ma Quỷ
        </h1>
      </div>
      {/*   */}
      <div></div>
      <div className="flex justify-center w-full md:w-[90dvw] text-white">
        <main className="flex flex-col md:flex-row gap-8 md:gap-32 justify-center">
          {/* bg */}
          <div className="absolute w-full md:w-[117rem] h-[70rem] self-start border-foreground rounded-3xl border-4 overflow-hidden backdrop-blur-md ">
            <Image
              src={canva7}
              alt="Background image"
              fill
              quality={50}
              placeholder="blur"
              className="object-cover object-center backdrop-blur-md opacity-60"
            ></Image>
            <Image
              src={khung}
              alt="Background image"
              fill
              quality={50}
              placeholder="blur"
              className="object-cover object-center"
            ></Image>
          </div>
          <div className="w-full md:w-[100rem] h-auto md:h-[70rem] lg:col-span-1 flex flex-col justify-center items-center relative">
            {/* Info */}
            <div className="lg:col-span-2 flex flex-col justify-center items-center lg:items-start mb-8 md:mb-0">
              <div className="text-center">
                <h2 className="writing text-yellowground text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold mb-4 transition-opacity duration-500">
                  {selectedMonster.name.toUpperCase()}
                </h2>
                <p className="leading-relaxed transition-opacity duration-500 h-auto md:h-[10rem] w-full md:w-[40rem] p-4 md:p-0 text-sm sm:text-base md:text-lg lg:text-xl">
                  {selectedMonster.story}
                </p>
              </div>
            </div>
            {/* Images */}
            <div className="relative w-full md:w-[80rem] h-[20rem] md:h-[40rem] rounded-lg transition-all duration-500 ease-in-out">
              <Image
                src={selectedMonster.icon}
                alt={`${selectedMonster.name} Avatar`}
                key={selectedMonster.id} // Ad
                fill
                quality={50}
                placeholder="blur"
                className="object-contain transition-all hover:scale-110"
              />
            </div>
          </div>
        </main>
      </div>
      {/* Icon Selector */}
      <div className="flex flex-col justify-center items-center mt-8 md:mt-0">
        <div className="relative h-[15rem] md:h-[25rem] w-[20rem] md:w-[50rem]">
          <Image
            src={dialogue}
            alt={`Icon`}
            fill
            quality={50}
            placeholder="blur"
            className="object-cover rounded-lg"
          ></Image>
        </div>
        <div className="absolute flex flex-wrap justify-center gap-2 md:gap-4">
          {monsters.map((char) => (
            <div
              key={char.id}
              onClick={() => setSelectedMonster(char)}
              className="cursor-pointer group transform transition-transform duration-300 hover:scale-110"
              title={char.name}
            >
              <div
                className={`w-16 h-16 md:w-24 md:h-24 transition-all border-4 duration-300 border-b-4 rounded-lg ${
                  selectedMonster.id === char.id
                    ? "border-foreground scale-110"
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
                    className="object-contain rounded-lg"
                  ></Image>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
