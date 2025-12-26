import { forwardRef, useContext, useImperativeHandle } from "react";

import { FuncContext } from "@func/contexts/func.context";
import { Point } from "@func/components/primitives/point";

interface LineProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
}

export const Line = forwardRef<LineProps, LineProps>(({ from, to }, ref) => {
  const { origin, scale, zoom } = useContext(FuncContext);

  useImperativeHandle(ref, () => ({ from, to }), [from, to]);

  const X1 = origin.x + from.x * scale;
  const Y1 = origin.y - from.y * scale;
  const X2 = origin.x + to.x * scale;
  const Y2 = origin.y - to.y * scale;

  return (
    <g>
      <Point point={from} />
      <Point point={to} />

      <path
        d={`M ${X1} ${Y1} L ${X2} ${Y2}`}
        className="stroke-primary"
        strokeWidth={2 * zoom}
      />
    </g>
  );
});
