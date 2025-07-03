import Image from "next/image";

export default function Main() {
  return (
    <div className="relative flex h-[100dvh] border-4 border-yellowground justify-center items-center rounded-lg rows-start-1 row-end-2 overflow-hidden">
      <div className="relative w-full h-[100dvh] rounded-lg overflow-hidden bg-background">
        <Image
          className="object-cover opacity-60"
          src={"/BG/3.png"}
          alt="Background image"
          fill
        ></Image>
      </div>
      <div className="absolute inset-0 flex">
        <div
          className="flex flex-col items-center border-yellowground justify-center z-10 col-start-1 col-end-2 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 rounded-lg pr-16"
        >
          <div
            className="flex items-center justify-center"
          >
            <div className="relative overflow-hidden w-[20dvw] h-[40dvh]">
              <Image
                src={"/title/title.png"}
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="title text-foreground text-[10dvh] font-bold">
              Dị Linh Ký
            </h1>
          </div>
          <div
            className="relative overflow-hidden w-[5dvw] h-[20dvh] mt-4"
          >
            <Image
              src={"/studiologo/red.png"}
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
