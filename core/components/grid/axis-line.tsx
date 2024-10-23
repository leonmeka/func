import { useContext } from "react";

import { CoordinateSystemContext } from "@core/contexts/coordinate-system.context";

import { Axis } from "@core/types";

interface AxisLineProps {
  axis: Axis;
  offset: number;
  svgLength: number;
}

export const AxisLine = ({ axis, offset, svgLength }: AxisLineProps) => {
  const { origin, zoom } = useContext(CoordinateSystemContext);

  const isXAxis = axis === "x";

  const position = isXAxis ? origin.y : origin.x;

  return (
    <line
      className="stroke-muted"
      x1={isXAxis ? offset : position}
      y1={isXAxis ? position : offset}
      x2={isXAxis ? offset + svgLength : position}
      y2={isXAxis ? position : offset + svgLength}
      strokeWidth={3 * zoom}
    />
  );
};
