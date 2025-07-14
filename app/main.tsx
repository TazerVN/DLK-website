import Image from "next/image";
import title from "../public/asset/title.png"
import side from "../public/asset/side.png"
import fada from "../public/asset/logo/fada.png"
import hoasen from "../public/asset/logo/hoasen.png"

export default function Main() {
  return (
    <div className="flex flex-col w-full rounded-lg">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="absolute h-full w-full backdrop-blur-md -z-10"></div>
        <div className="absolute flex justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-[400px] h-[400px] md:w-[800px] md:h-[800px]">
              <Image
                src={title}
                alt="Logo"
                layout="fill"
                className="object-contain"
                priority
                quality={50}
                placeholder="blur"
              />
            </div>
            <h1 className="title text-foreground text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold">
              Dị Linh Ký
            </h1>
          </div>
        </div>
      </div>
      <div className="bold title flex flex-col justify-center items-center h-auto sm:h-[40rem] gap-8 sm:gap-12 md:gap-16 lg:gap-32 py-16">
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">A project by</p>
          <div className="relative w-[8rem] h-[4rem] md:w-[11rem] md:h-[5rem] mt-4">
            <Image
              src={side}
              alt="Logo"
              fill
              quality={50}
              placeholder="blur"
              className="object-cover invert"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
          <div className="relative w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mt-4">
            <Image
              src={fada}
              alt="Logo"
              fill
              quality={50}
              placeholder="blur"
              className="object-contain"
            />
          </div>

          <div className="relative w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mt-4">
            <Image
              src={hoasen}
              alt="Logo"
              fill
              quality={50}
              placeholder="blur"
              className="object-contain"
            />
          </div>
          <a
            title="Entertainment Software Rating Board, Public domain, via Wikimedia Commons"
            href="https://commons.wikimedia.org/wiki/File:ESRB_Teen.svg"
          >
            <Image
              width={100}
              height={100}
              quality={50}
              alt="ESRB Teen"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/ESRB_Teen.svg/128px-ESRB_Teen.svg.png?20110324232512"
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
}
