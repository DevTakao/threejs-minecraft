import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
import { RepeatWrapping } from "three";
import { useWorldStore } from "../store/useWorldStore";

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  const [addCube] = useWorldStore((state) => [state.addCube]);

  // repeat the small image
  groundTexture.wrapS = RepeatWrapping;
  groundTexture.wrapT = RepeatWrapping;
  groundTexture.repeat.set(100, 100);

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map((v) => Math.ceil(v)); // not want decimals
        addCube(x, y, z);
      }}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};

export default Ground;
