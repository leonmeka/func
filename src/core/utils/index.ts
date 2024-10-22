export const generatePath = (
    y: (x: number) => number,
    rangeX: [number, number],
    step: number
) => {
    return Array.from(
        { length: Math.ceil((rangeX[1] - rangeX[0]) / step) + 1 },
        (_, i) => {
            const x = rangeX[0] + i * step;
            const X = x;
            const Y = -y(x);
            return `${i === 0 ? "M" : "L"} ${X} ${Y}`;
        }
    ).join(" ");
};
