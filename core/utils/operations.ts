export const Operations = {
  COMPOSE: (f: (x: number) => number, g: (x: number) => number) => {
    return (x: number) => f(g(x));
  },

  ADD: (f: (x: number) => number, g: (x: number) => number) => {
    return (x: number) => f(x) + g(x);
  },

  SUBTRACT: (f: (x: number) => number, g: (x: number) => number) => {
    return (x: number) => f(x) - g(x);
  },

  MULTIPLY: (f: (x: number) => number, g: (x: number) => number) => {
    return (x: number) => f(x) * g(x);
  },

  DIVIDE: (f: (x: number) => number, g: (x: number) => number) => {
    return (x: number) => f(x) / g(x);
  },
};
