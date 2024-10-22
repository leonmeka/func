import { PropsWithChildren } from "react";

import { usePan } from "@/core/hooks/use-pan";

import {
  CoordinateSystemContext,
  initialContext,
} from "@/core/components/coordinate-system/coordinate-system.context";
import { useResize } from "@/core/hooks/use-resize";

export const CoordinateSystem = ({ children }: PropsWithChildren) => {
  const {
    dimensions: { width, height },
  } = useResize();
  const {
    offsetX,
    offsetY,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  } = usePan();
  const origin = { x: width / 2, y: height / 2 };

  const [minX, maxX] = initialContext.rangeX;
  const [minY, maxY] = initialContext.rangeY;

  const scaleX = width / (maxX - minX);
  const scaleY = height / (maxY - minY);

  return (
    <CoordinateSystemContext.Provider
      value={{
        origin: origin,
        rangeX: initialContext.rangeX,
        rangeY: initialContext.rangeY,
        scaleX,
        scaleY,
        offsetX,
        offsetY,
        step: initialContext.step,
      }}
    >
      <main
        className="h-full w-full select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <svg
          className="w-full h-full"
          viewBox={`
            ${offsetX} 
            ${offsetY}
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
