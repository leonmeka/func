import { useContext } from "react";

import { CoordinateSystemContext } from "@/core/contexts/coordinate-system.context";

export const Grid = () => {
  const { origin, scale, rangeX, rangeY, offsetX, offsetY, zoom } = useContext(
    CoordinateSystemContext
  );

  const [minX, maxX] = rangeX;
  const [minY, maxY] = rangeY;

  // Normalize offset
  const normalizedOffsetX = Math.ceil(offsetX / scale) - 1;
  const normalizedOffsetY = Math.ceil(offsetY / scale) - 1;

  // Add offset context to min, max ranges
  const extendedMinX = minX + normalizedOffsetX;
  const extendedMaxX = maxX + normalizedOffsetX;
  const extendedMinY = minY - normalizedOffsetY;
  const extendedMaxY = maxY - normalizedOffsetY;

  // Calculate the actual SVG dimensions needed
  const svgWidth = (maxX - minX) * scale;
  const svgHeight = (maxY - minY) * scale;

  // Generate grid lines, ticks and labels
  const gridLinesX = [];
  const gridLinesY = [];
  const ticksX = [];
  const ticksY = [];
  const labelsX = [];
  const labelsY = [];

  for (let i = extendedMinX; i <= extendedMaxX; i += 1) {
    const x = origin.x + i * scale;

    gridLinesX.push(
      <line
        className="stroke-muted"
        key={`x-grid-${i}`}
        x1={x}
        y1={offsetY}
        x2={x}
        y2={offsetY + svgHeight}
        strokeWidth={1 * zoom}
      />
    );

    if (i !== 0) {
      ticksX.push(
        <line
          className="stroke-muted"
          key={`x-tick-${i}`}
          x1={x}
          y1={origin.y - 8 * zoom}
          x2={x}
          y2={origin.y + 8 * zoom}
          strokeWidth={5 * zoom}
        />
      );

      labelsX.push(
        <text
          className="fill-muted-foreground"
          key={`x-label-${i}`}
          x={x}
          y={origin.y + 20 * zoom}
          fontSize={12 * zoom}
          textAnchor="middle"
        >
          {i}
        </text>
      );
    }
  }

  for (let i = extendedMinY; i <= extendedMaxY; i += 1) {
    const y = origin.y - i * scale;

    gridLinesY.push(
      <line
        className="stroke-muted"
        key={`y-grid-${i}`}
        x1={offsetX}
        y1={y}
        x2={offsetX + svgWidth}
        y2={y}
        strokeWidth={1 * zoom}
      />
    );

    if (i !== 0) {
      ticksY.push(
        <line
          className="stroke-muted"
          key={`y-tick-${i}`}
          x1={origin.x - 8 * zoom}
          y1={y}
          x2={origin.x + 8 * zoom}
          y2={y}
          strokeWidth={5 * zoom}
        />
      );

      labelsY.push(
        <text
          className="fill-muted-foreground"
          key={`y-label-${i}`}
          x={origin.x + 20 * zoom}
          y={y + 5 * zoom}
          fontSize={12 * zoom}
          textAnchor="end"
        >
          {i}
        </text>
      );
    }
  }

  return (
    <g>
      {/* Grid lines */}
      {gridLinesX}
      {gridLinesY}

      {/* Ticks */}
      {ticksX}
      {ticksY}

      {/* Labels */}
      {labelsX}
      {labelsY}

      {/* Axes lines */}
      <line
        className="stroke-muted"
        x1={offsetX}
        y1={origin.y}
        x2={offsetX + svgWidth}
        y2={origin.y}
        strokeWidth={5 * zoom}
      />
      <line
        className="stroke-muted"
        x1={origin.x}
        y1={offsetY}
        x2={origin.x}
        y2={offsetY + svgHeight}
        strokeWidth={5 * zoom}
      />
    </g>
  );
};
