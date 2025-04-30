import { AnimationControls, Canvas, Controls, Function, Func, Point, useAnimation } from "@func/index";

export const App = () => {
  const f = (x: number) => (Math.sinh(x) * 1) / 2;

  const g = (x: number) => x ** 2 * animation.y;

  const animation = useAnimation({
    y: f,
    duration: 2_000,
    range: [-5, 5],
  });

  return (
    <div style={{
      width: "100vw",
      height: "100vh"
    }}>
      <Func debug>
        <Canvas>
          <Function y={f} color="muted" />
          <Function y={g} />
          <Point point={{ x: animation.x, y: animation.y }} />
        </Canvas>

        <Controls>
          <AnimationControls animation={animation} />
        </Controls>
      </Func>
    </div>
  );
};
