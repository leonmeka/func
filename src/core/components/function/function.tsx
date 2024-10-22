import { useContext } from "react";
import { CoordinateSystemContext } from "@/core/components/coordinate-system/coordinate-system.context";
import { generatePath } from "@/core/utils";

interface FunctionProps {
  y: (x: number) => number;
  color?: string;
}

export const Function = ({ y, color = "black" }: FunctionProps) => {
  const {
    step,
    rangeX,
    rangeY,
    scaleX,
    scaleY,
    origin
  } = useContext(CoordinateSystemContext);

  return (
    <path
      d={generatePath(y, rangeX, rangeY, step, origin, scaleX, scaleY)}
      stroke={color}
      fill="none"
      strokeWidth={2}
    />
  );
};
