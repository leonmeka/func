import { createContext } from "react";

import * as models from "@/core/models";

interface CoordinateSystemContextProps {
  origin: models.Point;
  rangeX: [number, number];
  rangeY: [number, number];
  scaleX: number;
  scaleY: number;
  offsetX: number;
  offsetY: number;
}

const initialContext: CoordinateSystemContextProps = {
  origin: { x: 0, y: 0 },
  rangeX: [-10, 10],
  rangeY: [-10, 10],
  scaleX: 0,
  scaleY: 0,
  offsetX: 0,
  offsetY: 0,
};

const CoordinateSystemContext =
  createContext<CoordinateSystemContextProps>(initialContext);

export { CoordinateSystemContext, initialContext };
