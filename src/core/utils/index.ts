import { Range } from "@/core/models";
import { Point } from "@/core/models";

export const generatePath = (
  y: (x: number) => number,
  rangeX: Range,
  rangeY: Range,
  step: number,
  origin: Point,
  scaleX: number,
  scaleY: number
) => {
  const [minX, maxX] = rangeX;
  const [minY, maxY] = rangeY;

  const pathCommands = Array.from({ length: Math.ceil((maxX - minX) / step) + 1 }, (_, i) => {
    const x = minX + i * step;
    const yValue = y(x);

    if (yValue < minY || yValue > maxY) return null;

    const svgX = origin.x + x * scaleX;
    const svgY = origin.y - yValue * scaleY;

    return `${svgX} ${svgY}`;
  }).filter(Boolean);

  if (pathCommands.length === 0) return "";

  return `M ${pathCommands[0]} ` + pathCommands.slice(1).map(cmd => `L ${cmd}`).join(" ");
};
