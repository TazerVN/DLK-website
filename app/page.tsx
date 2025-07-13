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
    <main className="relative items-center h-max w-dvw justify-items-center select-none overflow-hidden overflow-y-hidden">
      <div className="gap-0 items-center justify-center rounded-lg shadow-lg grid grid-rows-[1fr_1.5fr_1.5fr_2fr] grid-cols-1 ">
        <div id="home">
          <Main></Main>
        </div>
        <div id="about">
          <About></About>
          <World></World>
        </div>
        <div id="character">
          <Character></Character>
          <NPC></NPC>
        </div>
        <div id="monster">
          <Monster></Monster>
          <Mob></Mob>
        </div>
      </div>
      <footer className="w-dvw">
        <Footer></Footer>
      </footer>
    </main>
  );
}
