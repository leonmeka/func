import { useContext } from "react";

import { FuncContext } from "@func/contexts/func.context";

import { Axis } from "@func/types";

interface AxisLineProps {
  axis: Axis;
  offset: number;
  svgLength: number;
}

export const AxisLine = ({ axis, offset, svgLength }: AxisLineProps) => {
  const { origin, zoom } = useContext(FuncContext);

  const isXAxis = axis === "x";

  const xy = isXAxis ? origin.y : origin.x;

  if (Number.isNaN(xy) || !isFinite(xy)) {
    return null;
  }

  return (
    <line
      className="stroke-muted"
      x1={isXAxis ? offset : xy}
      y1={isXAxis ? xy : offset}
      x2={isXAxis ? offset + svgLength : xy}
      y2={isXAxis ? xy : offset + svgLength}
      strokeWidth={3 * zoom}
    />
  );
};
