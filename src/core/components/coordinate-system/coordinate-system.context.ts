import { createContext } from "react";

import { Position } from "@/core/models/models";

interface CoordinateSystemContextProps {
  origin: Position;
  rangeX: [number, number];
  rangeY: [number, number];
  step: number;
}

const initialContext: CoordinateSystemContextProps = {
  origin: { x: 0, y: 0 },
  rangeX: [-10, 10],
  rangeY: [-10, 10],
  step: 1,
};

const CoordinateSystemContext =
  createContext<CoordinateSystemContextProps>(initialContext);

export { CoordinateSystemContext, initialContext };
