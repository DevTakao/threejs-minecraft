import { useWorldStore } from "../store/useWorldStore";
import Cube from "./Cube";

const Cubes = () => {
  const [cubes] = useWorldStore((state) => [state.cubes]);
  console.log("cubes", cubes);
  return cubes.map(({ key, pos, texture }) => <Cube key={key} position={pos} texture={texture} />);
};

export default Cubes;
