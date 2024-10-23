import { useState } from "react";

export const useZoom = () => {
  const [zoom, setZoom] = useState(1);

  const handleWheel = (event: React.WheelEvent) => {
    const newZoom = zoom + event.deltaY * -0.01;
    setZoom(Math.min(Math.max(newZoom, 1), 2));
  };

  return { zoom, handleWheel };
};
