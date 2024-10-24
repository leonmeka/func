import { useEffect, useRef, useState } from "react";

import { Range } from "@core/types";

export interface UseAnimationProps {
    y: (x: number) => number;
    duration: number;
    range: Range;
    loop?: boolean;
}

export const useAnimation = ({ y: func, duration, range, loop = true, }: UseAnimationProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const animationRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);

    const [x, setX] = useState(range[0]);
    const [y, setY] = useState(func(x));

    const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;

        const [beginning, end] = range;
        const elapsed = timestamp - startTimeRef.current;
        const progress = elapsed / duration;

        if (progress >= 1) {
            if (!loop) {
                setX(range[0]);
                setY(func(range[0]));
                stop();
                return;
            }

            startTimeRef.current = timestamp;
        }

        const x = beginning + (end - beginning) * progress;
        const y = func(x);

        setX(x);
        setY(y);

        animationRef.current = requestAnimationFrame(animate);
    };

    const start = () => {
        if (animationRef.current) {
            const elapsed = performance.now() - startTimeRef.current!;
            startTimeRef.current = performance.now() - elapsed;
            return;
        }

        animationRef.current = requestAnimationFrame(animate);
        setIsPlaying(true);
    };

    const stop = () => {
        if (!animationRef.current) return;

        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
        startTimeRef.current = null;

        setIsPlaying(false);
    };

    useEffect(() => {
        start();
    }, []);

    return { start, stop, isPlaying, x, y };
};
