import { useAnimation } from "@core/hooks/use-animation";

import { Func } from "@core/components/func/func";
import { Canvas } from "@core/components/canvas/canvas";
import { Function } from "@core/components/primitives/function";
import { Controls } from "@core/components/controls/controls";
import { AnimationControls } from "@core/components/controls/animation-controls/animation-controls";
import { Point } from "@core/components/primitives/point";

export const App = () => {
  const f = (x: number) => (Math.sinh(x) * 1) / 2;

  const g = (x: number) => x ** 2 * animation.y;

  const animation = useAnimation({
    y: f,
    duration: 2_000,
    range: [-5, 5],
  });

  return (
    <div className="dark w-dvw h-dvh">
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
