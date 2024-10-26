import { useContext } from "react";

import { FuncContext } from "@/contexts/func.context";

import { Axis, Range } from "@/types";

interface GridLineProps {
  axis: Axis;
  range: Range;
  offset: number;
  svgLength: number;
}

export const GridLines = ({
  axis,
  range,
  offset,
  svgLength,
}: GridLineProps) => {
  const { origin, scale, zoom } = useContext(FuncContext);

  const [min, max] = range;
  const gridLines = [];
  const ticks = [];
  const labels = [];

  const isXAxis = axis === "x";

  for (let i = min; i <= max; i += 1) {
    const position = isXAxis ? origin.x + i * scale : origin.y - i * scale;

    // Grid line
    gridLines.push(
      <line
        className="stroke-muted"
        key={`${axis}-grid-${i}`}
        x1={isXAxis ? position : offset}
        y1={isXAxis ? offset : position}
        x2={isXAxis ? position : offset + svgLength}
        y2={isXAxis ? offset + svgLength : position}
        strokeWidth={1}
      />
    );

    // Ticks and labels (omit zero line ticks and labels)
    if (i !== 0) {
      ticks.push(
        <line
          className="stroke-muted"
          key={`${axis}-tick-${i}`}
          x1={isXAxis ? position : origin.x - 8}
          y1={isXAxis ? origin.y - 8 : position}
          x2={isXAxis ? position : origin.x + 8}
          y2={isXAxis ? origin.y + 8 : position}
          strokeWidth={2 * zoom}
        />
      );

      labels.push(
        <text
          className="fill-muted-foreground"
          key={`${axis}-label-${i}`}
          x={isXAxis ? position : origin.x + 25}
          y={isXAxis ? origin.y + 25 : position + 5}
          fontSize={14}
          textAnchor={isXAxis ? "middle" : "end"}
        >
          {i}
        </text>
      );
    }
  }

  return (
    <g>
      {gridLines}
      {ticks}
      {labels}
    </g>
  );
};
