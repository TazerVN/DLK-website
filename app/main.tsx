import Image from "next/image";

export default function Main() {
  return (
    <div className="flex flex-col w-dvw rounded-lg rows-start-1 row-end-2">
      <div className="w-dvw h-[100rem] flex justify-center items-center ">
        <div className="absolute items-center justify-center flex h-[90rem] w-[120rem] rounded-xl z-[0]"></div>
        <div className="absolute h-[200rem] w-dvw backdrop-blur-md -z-10"></div>
        <div className="absolute flex justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <Image
                src={"/asset/title.png"}
                alt="Logo"
                width={800}
                height={800}
                className="object-contain"
                priority
                quality={50}
                placeholder="blur"
              />
            </div>
            <h1 className="title text-foreground text-9xl font-bold">
              Dị Linh Ký
            </h1>
          </div>
        </div>
      </div>
      <div className="bold title flex flex-col justify-center items-center h-[30rem] gap-32">
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl text-white">A project by</p>
          <div className="relative w-[11rem] h-[5rem] mt-4">
            <Image
              src={"/asset/side.png"}
              alt="Logo"
              fill
              quality={50}
              placeholder="blur"
              className="object-cover invert"
            />
          </div>
        </div>
        <div className="flex gap-32">
          <div className="relative w-[10rem] h-[10rem] mt-4">
            <Image
              src={"/asset/logo/fada.png"}
              alt="Logo"
              fill
              quality={50}
              placeholder="blur"
              className="object-contain"
            />
          </div>

          <div className="relative w-[10rem] h-[10rem] mt-4">
            <Image
              src={"/asset/logo/hoasen.png"}
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
              width={124}
              height={128}
              quality={50}
              placeholder="blur"
              alt="ESRB Teen"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/ESRB_Teen.svg/128px-ESRB_Teen.svg.png?20110324232512"
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
}
