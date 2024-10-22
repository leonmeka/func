import { useEffect, useState } from "react";

interface UseResizeProps {
  initialRangeX: [number, number];
  initialRangeY: [number, number];
}

export const useResize = ({ initialRangeX, initialRangeY }: UseResizeProps) => {
  const [rangeX, setRangeX] = useState(initialRangeX);
  const [rangeY, setRangeY] = useState(initialRangeY);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateRanges = () => {
      const [initialMinX, initialMaxX] = initialRangeX;
      const [initialMinY, initialMaxY] = initialRangeY;

      const newRangeX: [number, number] = [
        initialMinX - dimensions.width / 2,
        initialMaxX + dimensions.width / 2,
      ];

      const newRangeY: [number, number] = [
        initialMinY - dimensions.height / 2,
        initialMaxY + dimensions.height / 2,
      ];

      setRangeX(newRangeX);
      setRangeY(newRangeY);
    };

    updateRanges();
  }, [dimensions, initialRangeX, initialRangeY]);

  return { dimensions, rangeX, rangeY };
};
