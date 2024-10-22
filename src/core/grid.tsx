import { Position } from "./types";

interface GridProps {
  origin: Position;
  scaleX: number;
  scaleY: number;
}

export const Grid = ({ origin, scaleX, scaleY }: GridProps) => {
  const gridLinesX = [];
  const gridLinesY = [];
  const ticksX = [];
  const ticksY = [];
  const labelsX = [];
  const labelsY = [];

  // Grid lines for X axis
  for (let x = -10; x <= 10; x++) {
    const svgX = origin.x + x * scaleX;
    gridLinesX.push(
      <line
        key={`x-grid-${x}`}
        x1={svgX}
        y1="0"
        x2={svgX}
        y2="100%"
        stroke="lightgray"
      />
    );

    if (x !== 0) {
      ticksX.push(
        <line
          key={`x-tick-${x}`}
          x1={svgX}
          y1={origin.y - 5}
          x2={svgX}
          y2={origin.y + 5}
          stroke="lightgray"
          strokeWidth={2}
        />
      );

      // Add labels to the x-axis
      labelsX.push(
        <text
          key={`x-label-${x}`}
          x={svgX}
          y={origin.y + 20}
          fontSize="10"
          textAnchor="middle"
          fill="gray"
        >
          {x}
        </text>
      );
    }
  }

  // Grid lines for Y axis
  for (let y = -10; y <= 10; y++) {
    const svgY = origin.y - y * scaleY;
    gridLinesY.push(
      <line
        key={`y-grid-${y}`}
        x1="0"
        y1={svgY}
        x2="100%"
        y2={svgY}
        stroke="lightgray"
      />
    );
    // Add ticks to the y-axis (not at origin)
    if (y !== 0) {
      ticksY.push(
        <line
          key={`y-tick-${y}`}
          x1={origin.x - 5}
          y1={svgY}
          x2={origin.x + 5}
          y2={svgY}
          stroke="lightgray"
          strokeWidth={2}
        />
      );

      // Add labels to the y-axis
      labelsY.push(
        <text
          key={`y-label-${y}`}
          x={origin.x - 20}
          y={svgY + 4}
          fontSize="10"
          textAnchor="end"
          fill="gray"
        >
          {y}
        </text>
      );
    }
  }

  return (
    <g>
      {/* X and Y axis lines */}
      <line
        x1={origin.x}
        y1="0"
        x2={origin.x}
        y2="100%"
        stroke="lightgray"
        strokeWidth={2.5}
      />
      <line
        x1="0"
        y1={origin.y}
        x2="100%"
        y2={origin.y}
        stroke="lightgray"
        strokeWidth={2.5}
      />

      {/* Grid lines */}
      {gridLinesX}
      {gridLinesY}

      {/* Ticks on the X and Y axes */}
      {ticksX}
      {ticksY}

      {/* Labels on the X and Y axes */}
      {labelsX}
      {labelsY}
    </g>
  );
};
