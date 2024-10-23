export const AffineTransformation = {
  IDENTITY: (f: (x: number) => number) => {
    return f;
  },

  TRANSLATE: (f: (x: number) => number, dx: number, dy: number) => {
    return (x: number) => f(x - dx) + dy;
  },

  REFLECTION: (f: (x: number) => number) => {
    return (x: number) => -1 * f(x);
  },

  SCALE: (f: (x: number) => number, sx: number, sy: number) => {
    return (x: number) => f(x / sx) * sy;
  },

  ROTATE: (f: (x: number) => number, angle: number) => {
    return (x: number) => f(x * Math.cos(angle) - x * Math.sin(angle));
  },

  SHEAR: (f: (x: number) => number, k: number) => {
    return (x: number) => f(x - k * f(x));
  },
};
