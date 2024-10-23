import { useState } from "react";

export const useMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return {
    mousePosition,
    handleMouseMove,
  };
};
