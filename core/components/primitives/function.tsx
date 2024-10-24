import { useContext } from "react";

import { FuncContext } from "@core/contexts/func.context";

interface FunctionProps {
  y: (x: number) => number;
  color?: "primary" | "muted";
}

export const Function = ({ y: f, color = "primary" }: FunctionProps) => {
  const { origin, rangeX, scale, offsetX, zoom } = useContext(FuncContext);

  const [minX, maxX] = rangeX;

  // Normalize offset
  const normalizedOffset = Math.ceil(offsetX / scale);

  // Add offset context to min, max ranges
  const extendedMinX = minX + normalizedOffset - 1;
  const extendedMaxX = maxX + normalizedOffset + 1;

  const resolution = 0.01;

  // Generate path
  const pathCommands = Array.from(
    {
      length: Math.ceil((extendedMaxX - extendedMinX) / resolution) + 1,
    },
    (_, i) => {
      const x = extendedMinX + i * resolution;
      const y = f(x);

      const X = origin.x + x * scale;
      const Y = origin.y - y * scale;

      if (Number.isNaN(X) || Number.isNaN(Y)) {
        return null;
      }

      return `${X} ${Y}`;
    }
  ).filter(Boolean);

  if (pathCommands.length === 0) {
    return null;
  }

  const path = `M ${pathCommands.join(" L ")}`;

  return (
    <path
      d={path}
      fill="none"
      strokeWidth={2 * zoom}
      className={`stroke-${color}`}
    />
  );
};
