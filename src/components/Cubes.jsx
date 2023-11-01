import { useStore } from "../store/useStore";
import Cube from "./Cube";

const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes]);
  console.log("cubes", cubes);
  return cubes.map(({ key, pos, texture }) => <Cube key={key} position={pos} texture={texture} />);
};

export default Cubes;
