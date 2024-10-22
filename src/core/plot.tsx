import { Position } from "./types";
import { Function } from "./function";

interface PlotProps {
  func: Function;
  origin: Position;
  step: number;
  scaleX: number;
  scaleY: number;
}

export const Plot = ({ func, origin, step, scaleX, scaleY }: PlotProps) => {
  let pathData = "";
  let moveTo = true;

  for (let x = -10; x <= 10; x += step) {
    const y = func.evaluate(x);

    const svgX = origin.x + x * scaleX;
    const svgY = origin.y - y * scaleY;

    if (moveTo) {
      pathData += `M ${svgX} ${svgY}`;
      moveTo = false;
    } else {
      pathData += ` L ${svgX} ${svgY}`;
    }
  }

  return <path d={pathData} stroke="grey" fill="none" strokeWidth={3} />;
};
