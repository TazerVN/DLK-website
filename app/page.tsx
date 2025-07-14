import Main from "./main";
import About from "./about";
import Character from "./character";
import World from "./world";
import Monster from "./monster";
import Mob from "./mob";
import Footer from "./footer";
import NPC from "./npc";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center h-max w-full justify-items-center select-none overflow-hidden">
      <div className="flex flex-col gap-0 items-center justify-center rounded-lg shadow-lg w-full">
        <div id="home" className="w-full">
          <Main />
        </div>
        <div id="about" className="w-full">
          <About />
          <World />
        </div>
        <div id="character" className="w-full">
          <Character />
          <NPC />
        </div>
        <div id="monster" className="w-full">
          <Monster />
          <Mob />
        </div>
      </div>
      <footer className="w-full">
        <Footer />
      </footer>
    </main>
  );
}
