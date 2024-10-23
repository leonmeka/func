import { CoordinateSystemContext } from "@core/contexts/coordinate-system.context";
import { useContext } from "react";

export const Debug = () => {
  const {
    origin,
    width,
    height,
    rangeX,
    rangeY,
    scale,
    offsetX,
    offsetY,
    zoom,
  } = useContext(CoordinateSystemContext);

  return (
    <div className="grid absolute bottom-0 left-0 p-4 text-muted-foreground text-xs gap-1">
      <span>
        Origin: {origin.x}, {origin.y}
      </span>
      <span>Scale: {scale}</span>
      <span>
        Offset: {offsetX}, {offsetY}
      </span>
      <span>Zoom: {zoom}</span>
      <span>Width: {width}</span>
      <span>Height: {height}</span>
      <span>
        Range X: {rangeX[0]} to {rangeX[1]}
      </span>
      <span>
        Range Y: {rangeY[0]} to {rangeY[1]}
      </span>
    </div>
  );
};
