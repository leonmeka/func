import { useState } from "react";

interface UseZoomProps {
  initialZoom: number;
  range: [number, number];
}

export const useZoom = ({ initialZoom, range }: UseZoomProps) => {
  const [zoom, setZoom] = useState<number>(initialZoom);

  const handleWheel = (e: React.WheelEvent) => {
    const [minZoom, maxZoom] = range;
    const multiplier = 0.25;
    const delta = e.deltaY * multiplier;

    const newZoom = Math.min(maxZoom, Math.max(minZoom, zoom + delta));

    setZoom(newZoom);
  };

  return {
    zoom,
    handleWheel,
  };
};
