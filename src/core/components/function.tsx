import { useContext } from "react";

import { CoordinateSystemContext } from "@/core/contexts/coordinate-system.context";

interface FunctionProps {
  y: (x: number) => number;
  resolution?: number;
  color?: string;
}

export const Function = ({
  y: func,
  resolution = 0.1,
  color = "black",
}: FunctionProps) => {
  const { origin, rangeX, scale, offsetX, zoom } = useContext(
    CoordinateSystemContext
  );

  const [minX, maxX] = rangeX;

  // Normalize offset
  const normalizedOffset = Math.ceil(offsetX / scale);

  // Add offset context to min, max ranges
  const extendedMinX = minX + normalizedOffset - 1;
  const extendedMaxX = maxX + normalizedOffset + 1;

  // Generate path
  const pathCommands = Array.from(
    {
      length:
        Math.ceil((extendedMaxX - extendedMinX) / resolution) +
        1,
    },
    (_, i) => {
      const x = extendedMinX + i * resolution;
      const y = func(x);

      const X = origin.x + x * scale;
      const Y = origin.y - y * scale;

      return `${X} ${Y}`;
    }
  ).filter(Boolean);

  if (pathCommands.length === 0) {
    return null;
  }

  const path = `M ${pathCommands.join(" L ")}`;

  return (
    <path d={path} stroke={color} fill="none" strokeWidth={2 * zoom} />
  );
};
