import { useContext } from "react";
import { CoordinateSystemContext } from "@/core/components/coordinate-system/coordinate-system.context";
import { generatePath } from "@/core/utils";

interface FunctionProps {
  y: (x: number) => number;
  color?: string;
}

export const Function = ({ y, color = "black" }: FunctionProps) => {
  const { rangeX, step } = useContext(CoordinateSystemContext);

  return (
    <path
      d={generatePath(y, rangeX, step)}
      stroke={color}
      fill="none"
      strokeWidth={5}
    />
  );
};
