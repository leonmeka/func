import { useContext } from "react";

import { CoordinateSystemContext } from "@/core/components/coordinate-system/coordinate-system.context";

interface FunctionProps {
  y: (x: number) => number;
  resolution: number;
  color?: string;
}

export const Function = ({ y, resolution, color = "black" }: FunctionProps) => {
  const {
    rangeX,
    rangeY,
    scaleX,
    scaleY,
    origin
  } = useContext(CoordinateSystemContext);
  const [minX, maxX] = rangeX;
  const [minY, maxY] = rangeY;

  const pathCommands = Array.from({ length: Math.ceil((maxX - minX) / resolution) + 1 }, (_, i) => {
    const x = minX + i * resolution;
    const yValue = y(x);

    if (yValue < minY || yValue > maxY) return null;

    const svgX = origin.x + x * scaleX;
    const svgY = origin.y - yValue * scaleY;

    return `${svgX} ${svgY}`;
  }).filter(Boolean);

  if (pathCommands.length === 0) return "";

  return (
    <path
      d={`M ${pathCommands[0]} ` + pathCommands.slice(1).map(cmd => `L ${cmd}`).join(" ")}
      stroke={color}
      fill="none"
      strokeWidth={2}
    />
  );
};
