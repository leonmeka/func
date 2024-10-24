import { createContext } from "react";

import { Point, Range } from "@core/types";

interface FuncContextProps {
  origin: Point;
  width: number;
  height: number;
  mousePosition: Point;
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
