import { useContext } from "react";

import { FuncContext } from "@core/contexts/func.context";

import { Point as PointType } from "@core/types";

interface PolygonProps {
  points: PointType[];
}

export const Area = ({ points }: PolygonProps) => {
  const { origin, scale, zoom } = useContext(FuncContext);

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
