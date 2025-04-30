import { useContext } from "react";

import { FuncContext } from "@func/contexts/func.context";

interface PointProps {
  point: { x: number, y: number };
}

export const Point = ({ point: { x, y } }: PointProps) => {
  const { origin, scale, zoom } = useContext(FuncContext);

  const X = origin.x + x * scale;
  const Y = origin.y - y * scale;

  if (Number.isNaN(X) || Number.isNaN(Y) || !isFinite(X) || !isFinite(Y)) {
    return null;
  }

  return <circle cx={X} cy={Y} r={5 * zoom} className="fill-primary" />;
};
