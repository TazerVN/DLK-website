import Image from "next/image";

export default function Character() {
  return (
    <div className="flex rounded-lg rows-start-3 row-end-4 overflow-hidden justify-center items-center border-4 border-yellowground">
      <div className="relative w-[100dvw] h-[100dvh] rounded-lg overflow-hidden">
        <Image
          className="object-cover"
          src={"/BG/final/final4.png"}
          alt="Background image"
          fill
        ></Image>
      </div>
      <div className="absolute top-30 h-[90dvh] w-dvw inset-0 grid grid-cols-[2fr_1fr] grid-rows-2 justify-center items-center overflow-hidden">
       
      </div>
    </div>
  );
}
