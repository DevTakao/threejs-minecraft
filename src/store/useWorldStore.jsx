import { nanoid } from "nanoid";
import create from "zustand";
import { persist } from "zustand/middleware";

// Define your store with the persist middleware
export const useWorldStore = create(
  persist(
    (set) => ({
      texture: "dirt",
      cubes: [],
      addCube: (x, y, z) => {
        set((prev) => ({
          cubes: [...prev.cubes, { key: nanoid(), pos: [x, y, z], texture: prev.texture }],
        }));
      },
      removeCube: (x, y, z) => {
        set((prev) => ({
          cubes: prev.cubes.filter(({ pos }) => {
            const [_x, _y, _z] = pos;
            return _x !== x || _y !== y || _z !== z;
          }),
        }));
      },
      setTexture: (texture) => {
        set({ texture: texture });
      },
      resetWorld: () => {
        set({
          texture: "dirt",
          cubes: [],
        });
      },
    }),
    {
      name: "threejs-minecraft-storage",
    }
  )
);
