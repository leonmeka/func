import { Area } from "@func/components/primitives/area";

interface RectProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
}

export const Rect = ({ from, to }: RectProps) => {
  const points = [
    { x: from.x, y: from.y },
    { x: to.x, y: from.y },
    { x: to.x, y: to.y },
    { x: from.x, y: to.y },
  ];

  return <Area points={points} />;
};
