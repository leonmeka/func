import { PropsWithChildren, useRef } from "react";

import { useZoom } from "@/hooks/use-zoom";
import { useResize } from "@/hooks/use-resize";
import { usePan } from "@/hooks/use-pan";
import { useMouse } from "@/hooks/use-mouse";

import { Range, Theme as ThemeType } from "@/types";

import { FuncContext } from "@/contexts/func.context";

import { Theme } from "@/components/theme/theme";
import { Debug } from "@/components/debug/debug";

interface CoordinateSystemProps {
  theme?: ThemeType;
  debug?: boolean;
  rangeX?: Range;
  rangeY?: Range;
}

export const Func = ({
  theme = "system",
  debug = false,
  rangeX = [-10, 10],
  rangeY = [-10, 10],
  children,
}: PropsWithChildren<CoordinateSystemProps>) => {
  const ref = useRef<HTMLDivElement>(null);

  const { mousePosition, handleMouseMove } = useMouse();
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
    <Theme theme={theme}>
      <div
        ref={ref}
        className="h-full w-full select-none bg-background overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
      >
        <FuncContext.Provider
          value={{
            origin,
            width,
            height,
            mousePosition,
            rangeX,
            rangeY,
            scale,
            offsetX,
            offsetY,
            zoom,
          }}
        >
          {children}
          {debug && <Debug />}
        </FuncContext.Provider>
      </div>
    </Theme>
  );
};
