import { useWorldStore } from "../store/useWorldStore";

const Menu = () => {
  const [resetWorld] = useWorldStore((state) => [state.resetWorld]);

  return (
    <div className="absolute top-0 left-[50%] -translate-x-[50%] z-50">
      <button onClick={resetWorld} className="bg-slate-600 text-white rounded-md text-xs py-2 px-2">
        Reset
      </button>
    </div>
  );
};

export default Menu;
