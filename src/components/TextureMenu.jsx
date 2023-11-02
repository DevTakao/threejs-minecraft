import { useEffect, useState } from "react";
import { useWorldStore } from "../store/useWorldStore";
import { useKeyboard } from "../hooks/useKeyboard";
import { dirtImg, grassImg, glassImg, woodImg, logImg } from "../images/images";

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
};

const TextureMenu = () => {
  const [show, setShow] = useState(false);
  const [activeTexture, setTexture] = useWorldStore((state) => [state.texture, state.setTexture]);
  const { dirt, grass, glass, wood, log } = useKeyboard();

  useEffect(() => {
    const textures = {
      dirt,
      grass,
      glass,
      wood,
      log,
    };
    const pressedTexture = Object.entries(textures).find(([k, v]) => v);
    if (pressedTexture) {
      setTexture(pressedTexture[0]);
    }
  }, [dirt, grass, glass, wood, log, setTexture]);

  useEffect(() => {
    setShow(true);
    const showTimer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(showTimer);
    };
  }, [activeTexture]);

  return (
    show && (
      <div className="absolute top-[75%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex">
        {Object.entries(images).map(([k, src]) => (
          <img
            src={src}
            alt={k}
            key={k}
            className={`w-[50px] ${k === activeTexture ? "border-2 border-white scale-150" : ""}`}
          />
        ))}
      </div>
    )
  );
};

export default TextureMenu;
