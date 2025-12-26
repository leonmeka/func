import { PropsWithChildren, useContext } from "react";

import { FuncContext } from "@func/contexts/func.context";

import { Grid } from "@func/components/grid/grid";

export const Canvas = ({ children }: PropsWithChildren) => {
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
      <Grid />
      {children}
    </svg>
  );
};
