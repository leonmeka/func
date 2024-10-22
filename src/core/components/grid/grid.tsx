import { useContext } from "react";
import { CoordinateSystemContext } from "@/core/components/coordinate-system/coordinate-system.context";

export const Grid = () => {
  const { origin, rangeX, rangeY } = useContext(CoordinateSystemContext);

  const gridLinesX = [];
  const gridLinesY = [];
  const labelsX = [];
  const labelsY = [];

  const stepX = 100;
  const stepY = 100;

  for (
    let x = Math.floor(rangeX[0] / stepX) * stepX;
    x <= rangeX[1];
    x += stepX
  ) {
    gridLinesX.push(
      <line
        key={`x-grid-${x}`}
        x1={x}
        y1={rangeY[0]}
        x2={x}
        y2={rangeY[1]}
        stroke="lightgray"
      />
    );

    labelsX.push(
      <text
        key={`x-label-${x}`}
        x={x}
        y={origin.y + 15}
        fontSize={`${14}`}
        textAnchor="middle"
        fill="gray"
      >
        {x.toFixed(0)}
      </text>
    );
  }

  for (
    let y = Math.floor(rangeY[0] / stepY) * stepY;
    y <= rangeY[1];
    y += stepY
  ) {
    gridLinesY.push(
      <line
        key={`y-grid-${y}`}
        x1={rangeX[0]}
        y1={y}
        x2={rangeX[1]}
        y2={y}
        stroke="lightgray"
      />
    );

    labelsY.push(
      <text
        key={`y-label-${y}`}
        x={origin.x - 15}
        y={y + 5}
        fontSize={`${14}`}
        textAnchor="end"
        fill="gray"
      >
        {y.toFixed(0)}
      </text>
    );
  }

  return (
    <g>
      {gridLinesX}
      {gridLinesY}

      <line
        x1={origin.x}
        y1={rangeY[0]}
        x2={origin.x}
        y2={rangeY[1]}
        stroke="black"
        strokeWidth={2}
      />
      <line
        x1={rangeX[0]}
        y1={origin.y}
        x2={rangeX[1]}
        y2={origin.y}
        stroke="black"
        strokeWidth={2}
      />

      {labelsX}
      {labelsY}
    </g>
  );
};
