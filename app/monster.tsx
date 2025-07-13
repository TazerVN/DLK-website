"use client";

import Image from "next/image";
import { useState } from "react";

interface Monster {
  id: number;
  name: string;
  icon: string;
  avatar: string;
  story: string;
}

const monsters: Monster[] = [
  {
    id: 1,
    name: "PHỤNG",
    icon: "/asset/boss/bird.png",
    avatar: "/asset/boss/bird.png",
    story:
      "Phượng hoàng được bắt nguồn từ nền văn hóa của Trung Hoa, được ví là loài chim đẹp nhất trong các loài chim. Phượng hoàng tuy được phân thành Phượng (con trống) và Hoàng (con mái) nhưng về sau không còn sự phân biệt rạch ròi như vậy nữa mà các đặc điểm được kết hợp lại với nhau và gọi chung là Phượng hoàng.",
  },
  {
    id: 2,
    name: "LONG",
    icon: "/asset/boss/dragon.png",
    avatar: "/asset/boss/dragon.png",
    story:
      "Rồng trong truyền thuyết được coi là con vật của trời, có quyền năng tối cao hơn các loài vật khác. Sự xuất hiện của Rồng được quan niệm là mang lại điều tốt lành, may mắn, thuận lợi và bình an. Người xưa quan niệm rồng là sứ giả đi lại với con người có thể gửi gắm những ước nguyện của cuộc sống như cầu mưa thuận gió hòa, cầu phồn thực sinh sôi...",
  },
  {
    id: 3,
    name: "QUY",
    icon: "/asset/boss/turtle.png",
    avatar: "/asset/boss/turtle.png",
    story:
      "Rùa là con vật duy nhất có thật trong tự nhiên. Rùa là một loài bò sát lưỡng cư có tuổi thọ cao và khả năng sống trong một thời gian dài mà không cần tới thức ăn do đó được ví với phẩm chất thanh cao, thoát tục. Rùa từ lâu đã gắn liền với văn hóa người Việt thông qua câu chuyện thần Kim Quy giúp vua An Dương.",
  },
  {
    id: 4,
    name: "LÂN",
    icon: "/asset/boss/lion.png",
    avatar: "/asset/boss/lion.png",
    story:
      "Lân là linh vật được biết đến thứ 2 sau Rồng. Dân gian cho rằng sự xuất hiện của Lân báo hiệu điềm lành, thái bình thịnh vượng sắp tới. Ngoài ra hình tượng Lân cũng được dùng để trấn giữ cửa nhà, hóa giải hung khí khi đối diện với cửa nhà khác, có ngã ba, ngã tư, góc nhọn, đường vòng chiếu thẳng vào nhà.",
  },
];

export default function Monster() {
  // State to track the currently selected monster. Initialize with the first monster.
  const [selectedMonster, setSelectedMonster] = useState<Monster>(monsters[0]);

  return (
    <div className="flex flex-col items-center w-full h-full gap-16 mt-32">
      <div className="flex w-[100dvw] items-center justify-center">
        <div className="absolute w-[100dvw] h-[9rem] border-y-4 bg-background z-10">
          <Image
            src={"/asset/Canva-8.png"}
            alt="Logo"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative w-[100rem] h-[30rem] z-10">
          <Image
            src={"/asset/dialogue.png"}
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>
        {/* title */}
        <h1 className="absolute mb-10 title text-center text-foreground text-8xl font-extrabold z-10">
          Ma Quỷ
        </h1>
      </div>
      {/*   */}
      <div></div>
      <div className="flex justify-center w-[90dvw] text-white">
        <main className="flex gap-32 justify-center">
          {/* bg */}
          <div className="absolute w-[117rem] h-[70rem] self-start border-foreground rounded-3xl border-4 overflow-hidden backdrop-blur-md">
            <Image
              src="/asset/Canva-7.png"
              alt="Background image"
              fill
              className="object-cover object-center backdrop-blur-md opacity-60"
            ></Image>
            <Image
              src="/asset/Khung.png"
              alt="Background image"
              fill
              className="object-contain object-center"
            ></Image>
          </div>
          <div className="w-[100rem] h-[70rem] lg:col-span-1 flex justify-center items-center relative">
            {/* Info */}
            <div className="lg:col-span-2 flex flex-col justify-center items-center lg:items-start mb-16">
              <div className="text-center">
                <h2 className="writing text-yellowground text-7xl font-bold mb-4 transition-opacity duration-500">
                  {selectedMonster.name.toUpperCase()}
                </h2>
                <p className="leading-relaxed transition-opacity duration-500 h-[10rem] w-[40rem] ">
                  {selectedMonster.story}
                </p>
              </div>
            </div>
            {/* Images */}
            <div className="relative w-[80rem] h-[40rem] rounded-lg transition-all duration-500 ease-in-out">
              <Image
                src={selectedMonster.avatar}
                alt={`${selectedMonster.name} Avatar`}
                key={selectedMonster.id} // Ad
                fill
                className="object-contain transition-all hover:scale-110"
              />
            </div>
          </div>
        </main>
      </div>
      {/* Icon Selector */}
      <div className="flex flex-col justify-center items-center">
        {/* <h3 className="title text-2xl md:text-3xl font-bold tracking-wider mb-6 text-center lg:text-left">
                  CREATURES
                </h3> */}
        <div className="relative h-[25rem] w-[50rem]">
          <Image
            src={"/asset/dialogue.png"}
            alt={`Icon`}
            fill
            className="object-cover rounded-lg"
          ></Image>
        </div>
        <div className="absolute flex flex-wrap justify-center gap-4">
          {monsters.map((char) => (
            <div
              key={char.id}
              onClick={() => setSelectedMonster(char)}
              className="cursor-pointer group transform transition-transform duration-300 hover:scale-110"
              title={char.name}
            >
              <div
                className={`w-24 h-24 transition-all border-4 duration-300 border-b-4 rounded-lg ${
                  selectedMonster.id === char.id
                    ? "border-foreground scale-110"
                    : "border-transparent group-hover:border-white/50"
                }`}
              >
                <div className="w-23 h-23 relative">
                  <Image
                    src={char.icon}
                    alt={`${char.name} Icon`}
                    fill
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
