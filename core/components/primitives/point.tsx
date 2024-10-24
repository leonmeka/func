import { useContext } from "react";

import { Point as PointType } from "@core/types";

import { FuncContext } from "@core/contexts/func.context";

interface PointProps {
  point: PointType;
}

export const Point = ({ point: { x, y } }: PointProps) => {
  const { origin, scale, zoom } = useContext(FuncContext);

  const X = origin.x + x * scale;
  const Y = origin.y - y * scale;

  if (Number.isNaN(X) || Number.isNaN(Y) || !isFinite(X) || !isFinite(Y)) {
    return null;
  }

  return (
    <circle
      cx={X}
      cy={Y}
      r={5 * zoom}
      className="fill-primary cursor-pointer"
    />
  );
};
