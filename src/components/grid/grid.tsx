import { useContext } from "react";

import { FuncContext } from "@/contexts/func.context";

import { GridLines } from "@/components/grid/grid-lines";
import { AxisLine } from "@/components/grid/axis-line";

export const Grid = () => {
  const { scale, rangeX, rangeY, offsetX, offsetY } = useContext(FuncContext);

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

  return (
    <g>
      <GridLines
        axis="x"
        range={[extendedMinX, extendedMaxX]}
        offset={offsetY}
        svgLength={svgHeight}
      />
      <GridLines
        axis="y"
        range={[extendedMinY, extendedMaxY]}
        offset={offsetX}
        svgLength={svgWidth}
      />

      <AxisLine axis="x" offset={offsetX} svgLength={svgWidth} />
      <AxisLine axis="y" offset={offsetY} svgLength={svgHeight} />
    </g>
  );
};
