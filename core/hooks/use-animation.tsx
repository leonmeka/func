import { useEffect, useRef, useState } from "react";

import { Range } from "@core/types";

export interface UseAnimationProps {
    y: (x: number) => number;
    duration: number;
    range: Range;
}

export const useAnimation = ({ y: func, duration, range }: UseAnimationProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [value, setValue] = useState(range[0]);
    const animationRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);

    const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;

        const [beginning, end] = range;
        const elapsed = timestamp - startTimeRef.current;
        const progress = elapsed / duration;

        if (progress >= 1) {
            setValue(func(end));
            stop();

            return;
        }

        const x = beginning + (end - beginning) * progress;
        const y = func(x);

        setValue(y);

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

    return { start, stop, isPlaying, value };
};
