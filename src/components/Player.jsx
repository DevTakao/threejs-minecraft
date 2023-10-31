import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

const Player = () => {
  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 1, 0],
  }));

  const pos = useRef([0, 0, 0]); // sphere ref
  const vel = useRef([0, 0, 0]); // sphere velocity

  useEffect(() => {
    api.position.subscribe((p) => (pos.current = p)); // keep track of the sphere position in ref
  }, [api.position]);

  useEffect(() => {
    api.velocity.subscribe((v) => (vel.current = v)); // keep track of the sphere velocity in ref
  }, [api.velocity]);

  // the animation loop
  useFrame(() => {
    console.log("frame");
    camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2])); // camera follows sphere
    api.velocity.set(0, 1, 0); //test
  });

  return <mesh ref={ref}></mesh>;
};

export default Player;
