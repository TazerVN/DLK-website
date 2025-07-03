import Image from "next/image";

export default function About() {
  return (
    <div className="relative h-[90dvh] w-lvw rounded-lg rows-start-2 row-end-3 mb-16">
      <div className="relative h-dvh inset-0 flex justify-center items-center">
        <div className="absolute flex h-dvh items-center border-yellowground justify-center col-start-1 col-end-2">
          <div className="flex items-center justify-center ">
            <div className="relative w-[50dvw] h-[90dvh] flex items-center justify-center p-16">
              <div className="absolute w-full h-full z-[-5]">
                <Image
                  src={"/Iconi/stone.png"}
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="writing text-foreground text-8xl sm:text-8xl lg:text-9xl font-bold z-10">
                About
              </h1>
            </div>
            <div className="w-[40dvw] h-[40dvh] p-16">
                <h2 className="inset-0 items-center justify-center font-bold text-4xl z-10 p-16">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  cum totam ex at, beatae saepe tempore rerum odio libero officiis
                  maxime ea et fugit possimus inventore similique nihil provident
                  impedit.
                </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
