import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ground from "./components/Ground";
import Player from "./components/Player";
import FPV from "./components/FPV";
import Cubes from "./components/Cubes";
import TextureMenu from "./components/TextureMenu";
import Menu from "./components/Menu";
import Instructions from "./components/Instructions";

function App() {
  return (
    <>
      <Instructions />
      <Menu />
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <TextureMenu />
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white z-50 select-none pointer-events-none">
        +
      </div>
    </>
  );
}

export default App;
