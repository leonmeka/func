import { forwardRef, useContext, useImperativeHandle } from "react";

import { FuncContext } from "@func/contexts/func.context";

interface PointProps {
  point: { x: number; y: number };
}

export const Point = forwardRef<PointProps, PointProps>(({ point }, ref) => {
  const { origin, scale, zoom } = useContext(FuncContext);

  useImperativeHandle(ref, () => ({ point }), [point]);

  const X = origin.x + point.x * scale;
  const Y = origin.y - point.y * scale;

  if (Number.isNaN(X) || Number.isNaN(Y) || !isFinite(X) || !isFinite(Y)) {
    return null;
  }

  return <circle cx={X} cy={Y} r={5 * zoom} className="fill-primary" />;
});
