import { createContext } from "react";

import { Range } from "@/types";

export interface FuncContextProps {
  origin: { x: number, y: number };
  width: number;
  height: number;
  mousePosition: { x: number, y: number };
  rangeX: Range;
  rangeY: Range;
  scale: number;
  offsetX: number;
  offsetY: number;
  zoom: number;
}

const initialContext: FuncContextProps = {
  origin: { x: 0, y: 0 },
  width: 0,
  height: 0,
  mousePosition: { x: 0, y: 0 },
  rangeX: [-10, 10],
  rangeY: [-10, 10],
  scale: 0,
  offsetX: 0,
  offsetY: 0,
  zoom: 1,
};

const FuncContext = createContext<FuncContextProps>(initialContext);

export { FuncContext, initialContext };
