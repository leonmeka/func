import { PropsWithChildren } from "react";

import { usePan } from "@/core/hooks/use-pan";
import { useResize } from "@/core/hooks/use-resize";

import {
  CoordinateSystemContext,
  initialContext,
} from "@/core/components/coordinate-system/coordinate-system.context";

export const CoordinateSystem = ({ children }: PropsWithChildren) => {
  const { dimensions, rangeX, rangeY } = useResize({
    initialRangeX: initialContext.rangeX,
    initialRangeY: initialContext.rangeY,
  });

  const { offsetX, offsetY, handlePointerDown, handlePointerMove, handlePointerUp } =
    usePan();

  const { width, height } = dimensions;

  const adjustedRangeX: [number, number] = [
    rangeX[0] + offsetX,
    rangeX[1] + offsetX,
  ];
  const adjustedRangeY: [number, number] = [
    rangeY[0] + offsetY,
    rangeY[1] + offsetY,
  ];

  return (
    <CoordinateSystemContext.Provider
      value={{
        origin: initialContext.origin,
        rangeX: adjustedRangeX,
        rangeY: adjustedRangeY,
        step: initialContext.step,
      }}
    >
      <main
        className="w-screen h-screen select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <svg
          className="w-full h-full"
          viewBox={`
            ${adjustedRangeX[0]} 
            ${adjustedRangeY[0]}
            ${width} 
            ${height}
          `}
        >
          {children}
        </svg>
      </main>
    </CoordinateSystemContext.Provider>
  );
};
