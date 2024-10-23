import { useContext } from "react";
import { CoordinateSystemContext } from "@/core/components/coordinate-system/coordinate-system.context";

interface GridProps {
  steps?: number;
}

export const Grid = ({ steps = 1 }: GridProps) => {
  const { origin, scaleX, scaleY, rangeX, rangeY, offsetX, offsetY, zoom } =
    useContext(CoordinateSystemContext);

  const [minX, maxX] = rangeX;
  const [minY, maxY] = rangeY;

  // Calculate visible range based on offset
  const visibleMinX = minX + Math.floor(offsetX / scaleX);
  const visibleMaxX = maxX + Math.floor(offsetX / scaleX);
  const visibleMinY = minY - Math.floor(offsetY / scaleY);
  const visibleMaxY = maxY - Math.floor(offsetY / scaleY);

  // Calculate the actual SVG dimensions needed
  const svgWidth = (maxX - minX) * scaleX;
  const svgHeight = (maxY - minY) * scaleY;

  // Generate grid lines, ticks and labels
  const gridLinesX = [];
  const gridLinesY = [];
  const ticksX = [];
  const ticksY = [];
  const labelsX = [];
  const labelsY = [];

  for (let x = visibleMinX; x <= visibleMaxX; x += steps) {
    const svgX = origin.x + x * scaleX;
    gridLinesX.push(
      <line
        key={`x-grid-${x}`}
        x1={svgX}
        y1={offsetY}
        x2={svgX}
        y2={offsetY + svgHeight}
        stroke="lightgray"
        strokeWidth={1 * zoom}
      />
    );

    if (x !== 0) {
      ticksX.push(
        <line
          key={`x-tick-${x}`}
          x1={svgX}
          y1={origin.y - 5 * zoom}
          x2={svgX}
          y2={origin.y + 5 * zoom}
          stroke="lightgray"
          strokeWidth={2 * zoom}
        />
      );

      labelsX.push(
        <text
          key={`x-label-${x}`}
          x={svgX - 1 * zoom}
          y={origin.y + 20 * zoom}
          fontSize={12 * zoom}
          textAnchor="middle"
          fill="gray"
        >
          {x}
        </text>
      );
    }
  }

  for (let y = visibleMinY; y <= visibleMaxY; y += steps) {
    const svgY = origin.y - y * scaleY;
    gridLinesY.push(
      <line
        key={`y-grid-${y}`}
        x1={offsetX}
        y1={svgY}
        x2={offsetX + svgWidth}
        y2={svgY}
        stroke="lightgray"
        strokeWidth={1 * zoom}
      />
    );

    if (y !== 0) {
      ticksY.push(
        <line
          key={`y-tick-${y}`}
          x1={origin.x - 5 * zoom}
          y1={svgY}
          x2={origin.x + 5 * zoom}
          y2={svgY}
          stroke="lightgray"
          strokeWidth={2 * zoom}
        />
      );

      labelsY.push(
        <text
          key={`y-label-${y}`}
          x={origin.x - 20 * zoom}
          y={svgY + 5 * zoom}
          fontSize={12 * zoom}
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
        x1={origin.x}
        y1={offsetY}
        x2={origin.x}
        y2={offsetY + svgHeight}
        stroke="lightgray"
        strokeWidth={2 * zoom}
      />
      <line
        x1={offsetX}
        y1={origin.y}
        x2={offsetX + svgWidth}
        y2={origin.y}
        stroke="lightgray"
        strokeWidth={2 * zoom}
      />
    </g>
  );
};
