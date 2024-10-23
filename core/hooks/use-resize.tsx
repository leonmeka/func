import { useEffect, useState } from "react";

export const useResize = (ref: React.RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.clientWidth,
          height: ref.current.clientHeight,
        });
      }
    };

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(ref.current);

    // Initial update
    updateDimensions();

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);

  return { dimensions };
};
