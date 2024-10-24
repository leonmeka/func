import { PropsWithChildren, useContext } from "react";

import { FuncContext } from "@core/contexts/func.context";

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
      {children}
    </svg>
  );
};
