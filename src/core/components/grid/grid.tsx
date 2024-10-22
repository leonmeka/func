import { useContext } from "react";
import { CoordinateSystemContext } from "@/core/components/coordinate-system/coordinate-system.context";

interface GridProps {
  steps: number;
}

export const Grid = ({ steps }: GridProps) => {
  const { origin, scaleX, scaleY, rangeX, rangeY, offsetX, offsetY } = useContext(
    CoordinateSystemContext
  );

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

      labelsX.push(
        <text
          key={`x-label-${x}`}
          x={svgX}
          y={origin.y + 20}
          fontSize="14"
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
      />
    );

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

      labelsY.push(
        <text
          key={`y-label-${y}`}
          x={origin.x - 20}
          y={svgY + 4}
          fontSize="14"
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
      {gridLinesX}
      {gridLinesY}
      {ticksX}
      {ticksY}
      {labelsX}
      {labelsY}

      {/* Axes lines */}
      <line
        x1={origin.x}
        y1={offsetY}
        x2={origin.x}
        y2={offsetY + svgHeight}
        stroke="lightgray"
        strokeWidth={2.5}
      />
      <line
        x1={offsetX}
        y1={origin.y}
        x2={offsetX + svgWidth}
        y2={origin.y}
        stroke="lightgray"
        strokeWidth={2.5}
      />
    </g>
  );
};
