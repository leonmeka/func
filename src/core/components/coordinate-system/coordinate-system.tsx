import { PropsWithChildren } from "react";

import { usePan } from "@/core/hooks/use-pan";

import {
  CoordinateSystemContext,
} from "@/core/components/coordinate-system/coordinate-system.context";
import { useResize } from "@/core/hooks/use-resize";
import { Range } from "@/core/models";

interface CoordinateSystemProps {
  rangeX: Range;
  rangeY: Range;
}

export const CoordinateSystem = ({ rangeX, rangeY, children }: PropsWithChildren<CoordinateSystemProps>) => {
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

  const [minX, maxX] = rangeX;
  const [minY, maxY] = rangeY;

  const scaleX = width / (maxX - minX);
  const scaleY = height / (maxY - minY);

  return (
    <CoordinateSystemContext.Provider
      value={{
        origin,
        rangeX,
        rangeY,
        scaleX,
        scaleY,
        offsetX,
        offsetY,
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
