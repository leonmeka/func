import { useContext } from "react";

import { FuncContext } from "@func/contexts/func.context";

interface PolygonProps {
  points: { x: number, y: number }[];
}

export const Area = ({ points }: PolygonProps) => {
  const { origin, scale, zoom } = useContext(FuncContext);

  return (
    <path
      d={`M ${points
        .map(({ x, y }) => {
          const X = origin.x + x * scale;
          const Y = origin.y - y * scale;

          if (
            Number.isNaN(X) ||
            Number.isNaN(Y) ||
            !isFinite(X) ||
            !isFinite(Y)
          ) {
            return null;
          }

          return `${X} ${Y}`;
        })
        .join(" L ")} Z`}
      className="fill-primary/10 stroke-primary"
      strokeWidth={2 * zoom}
    />
  );
};
