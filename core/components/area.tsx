import { useContext } from "react";

import { CoordinateSystemContext } from "@core/contexts/coordinate-system.context";

import { Point as PointType } from "@core/types";

interface PolygonProps {
  points: PointType[];
}

export const Area = ({ points }: PolygonProps) => {
  const { origin, scale, zoom } = useContext(CoordinateSystemContext);

  return (
    <path
      d={`M ${points
        .map(({ x, y }) => {
          const X = origin.x + x * scale;
          const Y = origin.y - y * scale;

          return `${X} ${Y}`;
        })
        .join(" L ")} Z`}
      className="fill-primary/10 stroke-primary"
      strokeWidth={2 * zoom}
    />
  );
};
