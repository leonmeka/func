import { useContext } from "react";

import { Point as PointType } from "@core/types";

import { FuncContext } from "@core/contexts/func.context";
import { Point } from "@core/components/primitives/point";

interface LineProps {
  from: PointType;
  to: PointType;
}

export const Line = ({
  from: { x: x1, y: y1 },
  to: { x: x2, y: y2 },
}: LineProps) => {
  const { origin, scale, zoom } = useContext(FuncContext);

  const X1 = origin.x + x1 * scale;
  const Y1 = origin.y - y1 * scale;

  const X2 = origin.x + x2 * scale;
  const Y2 = origin.y - y2 * scale;

  return (
    <g>
      <Point point={{ x: x1, y: y1 }} />
      <Point point={{ x: x2, y: y2 }} />

      <path
        d={`M ${X1} ${Y1} L ${X2} ${Y2}`}
        className="stroke-primary"
        strokeWidth={2 * zoom}
      />
    </g>
  );
};
