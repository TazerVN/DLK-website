import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="flex flex-col gap-[32px] row-start-2 items-center h-max-w-3xl w-10/12 p-16 z-5 rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-400 h-[400px] sm:h-[600px] border-2 border-yellowground rounded-lg overflow-hidden p-16 z-0 bg-background">
          <Image
            className="object-cover opacity-50"
            src={"/bg1.jpg"}
            alt="Background image"
            fill
          ></Image>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="text-yellowground text-4xl font-bold">
              lorem ipsom{" "}
            </h1>
          </div>
        </div>
        <div className="relative w-400 h-[400px] sm:h-[600px] border-2 border-yellowground rounded-xl overflow-hidden p-16 bg-background">
          <Image
            className="object-cover opacity-50"
            src={"/bg.jpg"}
            alt="Background image"
            fill
          ></Image>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="text-yellowground text-4xl font-bold">
              lorem ipsom{" "}
            </h1>
          </div>
        </div>
        <div className="relative w-400 h-[400px] sm:h-[600px] border border-yellowground rounded-lg overflow-hidden p-16 bg-background">
          <Image
            className="object-cover opacity-50"
            src={"/bg2.jpg"}
            alt="Background image"
            fill
          ></Image>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="text-yellowground text-4xl font-bold">
              lorem ipsom{" "}
            </h1>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
