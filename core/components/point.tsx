import { useContext } from "react";

import { Point as PointType } from "@core/types";

import { CoordinateSystemContext } from "@core/contexts/coordinate-system.context";

interface PointProps {
  point: PointType;
}

export const Point = ({ point: { x, y } }: PointProps) => {
  const { origin, scale, zoom } = useContext(CoordinateSystemContext);

  const X = origin.x + x * scale;
  const Y = origin.y - y * scale;

  return (
    <circle
      cx={X}
      cy={Y}
      r={5 * zoom}
      className="fill-primary cursor-pointer"
    />
  );
};
