export class Function {
  private readonly func: (x: number) => number;

  constructor(func: (x: number) => number) {
    this.func = func;
  }

  evaluate(x: number): number {
    return this.func(x);
  }

  toString(): string {
    return `f(x) = ${this.func.toString().replace("(x) => ", "")}`;
  }
}
