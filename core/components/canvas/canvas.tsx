import { PropsWithChildren, useContext } from "react";

import { FuncContext } from "@core/contexts/func.context";
import { Grid } from "@core/components/grid/grid";

interface CanvasProps {
  grid?: boolean;
}

export const Canvas = ({
  grid = true,
  children,
}: PropsWithChildren<CanvasProps>) => {
  const { width, height, offsetX, offsetY } = useContext(FuncContext);

  return (
    <svg
      viewBox={`
      ${offsetX} 
      ${offsetY}
      ${width}
      ${height}
    `}
    >
      {grid && <Grid />}
      {children}
    </svg>
  );
};
