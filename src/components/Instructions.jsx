import { useEffect, useState } from "react";

const Instructions = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleHelpPress = (e) => {
      if (e.key === "\\") {
        setShow((prevShow) => !prevShow);
      }
    };

    document.addEventListener("keydown", handleHelpPress);

    return () => {
      document.removeEventListener("keydown", handleHelpPress);
    };
  }, []);

  return (
    <div className="absolute top-[5px] left-[5px] z-50 text-sm text-white">
      <span className="bg-slate-600 text-white rounded-md text-xs py-2 px-2">Press &quot;\&quot; to toggle Help</span>
      {show ? (
        <ul className="bg-slate-600 text-white rounded-md text-xs py-2 px-2">
          <li>Make sure to click the cursor near the crosshair to get accurate camera</li>
          <li>W, A, S, D to move</li>
          <li>Space to jump</li>
          <li>Click to build a cube</li>
          <li>Alt+Click to remove a cube</li>
          <li>Number keys to change cube</li>
          <li>ESC to unbind cursor from game camera</li>
        </ul>
      ) : null}
    </div>
  );
};

export default Instructions;
