import { createContext } from "react";

import { Point } from "@/core/models";

interface CoordinateSystemContextProps {
  origin: Point;
  rangeX: [number, number];
  rangeY: [number, number];
  scale: number;
  offsetX: number;
  offsetY: number;
  zoom: number;
}

const initialContext: CoordinateSystemContextProps = {
  origin: { x: 0, y: 0 },
  rangeX: [-10, 10],
  rangeY: [-10, 10],
  scale: 0,
  offsetX: 0,
  offsetY: 0,
  zoom: 1,
};

const CoordinateSystemContext =
  createContext<CoordinateSystemContextProps>(initialContext);

export { CoordinateSystemContext, initialContext };
