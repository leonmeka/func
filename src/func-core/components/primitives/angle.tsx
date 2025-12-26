import { RefObject, useContext } from "react";

import { FuncContext } from "@func/contexts/func.context";

type LineOrVector = {
  from: { x: number; y: number };
  to: { x: number; y: number };
};

interface AngleProps {
  lines: [RefObject<LineOrVector | null>, RefObject<LineOrVector | null>];
  radius?: number;
}

function findVertex(
  l1: LineOrVector,
  l2: LineOrVector
): {
  vertex: { x: number; y: number };
  p1: { x: number; y: number };
  p2: { x: number; y: number };
} | null {
  const eps = 1e-9;
  const eq = (a: { x: number; y: number }, b: { x: number; y: number }) =>
    Math.abs(a.x - b.x) < eps && Math.abs(a.y - b.y) < eps;

  if (eq(l1.from, l2.from)) return { vertex: l1.from, p1: l1.to, p2: l2.to };
  if (eq(l1.from, l2.to)) return { vertex: l1.from, p1: l1.to, p2: l2.from };
  if (eq(l1.to, l2.from)) return { vertex: l1.to, p1: l1.from, p2: l2.to };
  if (eq(l1.to, l2.to)) return { vertex: l1.to, p1: l1.from, p2: l2.from };

  return null;
}

export const Angle = ({ lines, radius = 0.5 }: AngleProps) => {
  const { origin, scale, zoom } = useContext(FuncContext);

  const [ref1, ref2] = lines;
  const l1 = ref1.current;
  const l2 = ref2.current;

  if (!l1 || !l2) return null;

  const result = findVertex(l1, l2);
  if (!result) return null;

  const { vertex, p1, p2 } = result;

  const vx = origin.x + vertex.x * scale;
  const vy = origin.y - vertex.y * scale;
  const r = radius * scale;

  const angle1 = Math.atan2(-(p1.y - vertex.y), p1.x - vertex.x);
  const angle2 = Math.atan2(-(p2.y - vertex.y), p2.x - vertex.x);

  const x1 = vx + r * Math.cos(angle1);
  const y1 = vy + r * Math.sin(angle1);
  const x2 = vx + r * Math.cos(angle2);
  const y2 = vy + r * Math.sin(angle2);

  let deltaAngle = angle2 - angle1;
  if (deltaAngle > Math.PI) deltaAngle -= 2 * Math.PI;
  if (deltaAngle < -Math.PI) deltaAngle += 2 * Math.PI;
  const largeArc = Math.abs(deltaAngle) > Math.PI ? 1 : 0;
  const sweep = deltaAngle > 0 ? 1 : 0;

  if ([vx, vy, x1, y1, x2, y2].some((v) => Number.isNaN(v) || !isFinite(v))) {
    return null;
  }

  return (
    <path
      d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} ${sweep} ${x2} ${y2}`}
      className="stroke-primary"
      strokeWidth={2 * zoom}
      fill="none"
    />
  );
};
