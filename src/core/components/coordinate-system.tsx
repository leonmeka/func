import { PropsWithChildren, useRef } from "react";

import { usePan } from "@/core/hooks/use-pan";
import { useResize } from "@/core/hooks/use-resize";
import { useZoom } from "@/core/hooks/use-zoom";

import { Range } from "@/core/models";

import { CoordinateSystemContext } from "@/core/contexts/coordinate-system.context";

interface CoordinateSystemProps {
  rangeX?: Range;
  rangeY?: Range;
}

export const CoordinateSystem = ({
  rangeX = [-10, 10],
  rangeY = [-10, 10],
  children,
}: PropsWithChildren<CoordinateSystemProps>) => {
  const ref = useRef<SVGSVGElement>(null);

  const { zoom, handleWheel } = useZoom();
  const {
    dimensions: { width, height },
  } = useResize(ref);
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

  const scale = Math.max(
    width / (maxX - minX),
    height / (maxY - minY)
  ) * zoom;

  return (
    <CoordinateSystemContext.Provider
      value={{
        origin,
        rangeX,
        rangeY,
        scale,
        offsetX,
        offsetY,
        zoom,
      }}
    >
      <svg
        ref={ref}
        className="h-full w-full select-none"
        viewBox={`
            ${offsetX} 
            ${offsetY}
            ${width}
            ${height}
          `}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onWheel={handleWheel}
      >
        {children}
      </svg>
    </CoordinateSystemContext.Provider>
  );
};
