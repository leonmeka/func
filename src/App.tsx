import { CoordinateSystem } from "./core/coordinate-system.tsx";
import { Function } from "./core/function.tsx";

const sinF = new Function((x) => Math.sin(x) ** 3);

export const App = () => {
  return <CoordinateSystem func={sinF} />;
};
