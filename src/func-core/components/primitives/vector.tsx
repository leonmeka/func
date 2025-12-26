import { useContext } from "react";

import { FuncContext } from "@func/contexts/func.context";

interface VectorProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
}

export const Vector = ({ from, to }: VectorProps) => {
  const { origin, scale, zoom } = useContext(FuncContext);

  const X1 = origin.x + from.x * scale;
  const Y1 = origin.y - from.y * scale;
  const X2 = origin.x + to.x * scale;
  const Y2 = origin.y - to.y * scale;

  if ([X1, Y1, X2, Y2].some((v) => Number.isNaN(v) || !isFinite(v))) {
    return null;
  }

  const angle = Math.atan2(Y2 - Y1, X2 - X1);
  const arrowLength = 12 * zoom;
  const arrowAngle = Math.PI / 6;

  const arrowX1 = X2 - arrowLength * Math.cos(angle - arrowAngle);
  const arrowY1 = Y2 - arrowLength * Math.sin(angle - arrowAngle);
  const arrowX2 = X2 - arrowLength * Math.cos(angle + arrowAngle);
  const arrowY2 = Y2 - arrowLength * Math.sin(angle + arrowAngle);

  return (
    <g>
      <path
        d={`M ${X1} ${Y1} L ${X2} ${Y2}`}
        className="stroke-primary"
        strokeWidth={2 * zoom}
      />
      <path
        d={`M ${arrowX1} ${arrowY1} L ${X2} ${Y2} L ${arrowX2} ${arrowY2}`}
        className="stroke-primary"
        strokeWidth={2 * zoom}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
};
