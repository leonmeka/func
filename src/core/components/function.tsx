import { useContext, useEffect, useState } from "react";

import { CoordinateSystemContext } from "@/core/contexts/coordinate-system.context";

interface FunctionProps {
  y: (x: number) => number;
  resolution?: number;
  color?: string;
}

export const Function = ({
  y,
  resolution = 0.1,
  color = "black",
}: FunctionProps) => {
  const { origin, rangeX, rangeY, scaleX, scaleY, offsetX, zoom } = useContext(
    CoordinateSystemContext
  );

  const [minX, maxX] = rangeX;
  const [minY, maxY] = rangeY;
  const [pathData, setPathData] = useState<string>("");

  useEffect(() => {
    const normalizedOffset = offsetX / scaleX;

    const extendedVisibleMinX = minX + normalizedOffset;
    const extendedVisibleMaxX = maxX + normalizedOffset;

    const pathCommands = Array.from(
      {
        length:
          Math.ceil((extendedVisibleMaxX - extendedVisibleMinX) / resolution) +
          1,
      },
      (_, i) => {
        const x = extendedVisibleMinX + i * resolution;
        const yValue = y(x);

        const svgX = origin.x + x * scaleX;
        const svgY = origin.y - yValue * scaleY;

        return `${svgX} ${svgY}`;
      }
    ).filter(Boolean);

    if (pathCommands.length > 0) {
      const newPath =
        `M ${pathCommands[0]} ` +
        pathCommands
          .slice(1)
          .map((cmd) => `L ${cmd}`)
          .join(" ");
      setPathData(newPath);
    } else {
      setPathData("");
    }
  }, [
    offsetX,
    scaleX,
    minX,
    maxX,
    minY,
    maxY,
    origin.x,
    origin.y,
    resolution,
    y,
    zoom,
    scaleY,
  ]);

  if (!pathData) return null;

  return (
    <path d={pathData} stroke={color} fill="none" strokeWidth={2 * zoom} />
  );
};
