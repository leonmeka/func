import "@/core/styles/theme.css";

import { PropsWithChildren, useRef } from "react";

import { useZoom } from "@/core/hooks/use-zoom";
import { useResize } from "@/core/hooks/use-resize";
import { usePan } from "@/core/hooks/use-pan";

import { Range, Theme as ThemeType } from "@/core/types";

import { CoordinateSystemContext } from "@/core/contexts/coordinate-system.context";

import { Theme } from "@/core/components/theme";

interface CoordinateSystemProps {
  theme?: ThemeType;
  rangeX?: Range;
  rangeY?: Range;
}

export const CoordinateSystem = ({
  theme = "system",
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

  const scale = Math.max(width / (maxX - minX), height / (maxY - minY)) * zoom;

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
      <Theme theme={theme}>
        <svg
          ref={ref}
          className="h-full w-full select-none bg-background"
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
      </Theme>
    </CoordinateSystemContext.Provider>
  );
};
