import { useContext } from "react";

import { FuncContext } from "@func/contexts/func.context";

interface CircleProps {
  center: { x: number; y: number };
  radius: number;
}

export const Circle = ({ center, radius }: CircleProps) => {
  const { origin, scale, zoom } = useContext(FuncContext);

  const cx = origin.x + center.x * scale;
  const cy = origin.y - center.y * scale;
  const r = radius * scale;

  if (
    Number.isNaN(cx) ||
    Number.isNaN(cy) ||
    Number.isNaN(r) ||
    !isFinite(cx) ||
    !isFinite(cy) ||
    !isFinite(r)
  ) {
    return null;
  }

  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      className="fill-primary/10 stroke-primary"
      strokeWidth={2 * zoom}
    />
  );
};
