import { nanoid } from "nanoid";
import create from "zustand";

export const useWorldStore = create((set) => ({
  texture: "dirt",
  cubes: [
    {
      key: nanoid(),
      pos: [2, 0.5, 0],
      texture: "dirt",
    },
    {
      key: nanoid(),
      pos: [1, 0.5, 0],
      texture: "wood",
    },
  ],
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
  saveWorld: () => {},
  resetWorld: () => {},
}));
