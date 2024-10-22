// usePan.ts
import { useState } from "react";

export const usePan = () => {
  const [isPanning, setIsPanning] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseDown = (e: React.PointerEvent) => {
    setIsPanning(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: React.PointerEvent) => {
    if (!isPanning) return;

    setOffsetX((prevOffset) => prevOffset - (e.clientX - startX));
    setOffsetY((prevOffset) => prevOffset - (e.clientY - startY));

    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  return {
    offsetX,
    offsetY,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};
