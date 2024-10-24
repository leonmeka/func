import { useAnimation } from "@core/hooks/use-animation";

import { Func } from "@core/components/func/func";
import { Canvas } from "@core/components/canvas/canvas";
import { Grid } from "@core/components/grid/grid";
import { Function } from "@core/components/primitives/function";
import { Controls } from "@core/components/controls/controls";
import { AnimationControls } from "@core/components/controls/animation-controls/animation-controls";
import { Debug } from "@core/components/debug/debug";
import { Point } from "@core/components/primitives/point";

export const App = () => {
  // Define the base function
  const f = (x: number) => Math.sin(x);

  // Define the animation function
  const g = (x: number) => x ** 2 * animation.y;

  // Setup the animation
  const animation = useAnimation({
    y: f,
    duration: 5_000, // = 5s
    range: [-10, 10], // = [0 -> 10] on x-axis
  });

  return (
    <div className="dark w-dvw h-dvh">
      <Func>
        <Canvas>
          <Grid />

          {/* Visualize the functions */}
          <Function y={f} color="muted" />
          <Function y={g} />

          {/* Visualize the animation's progress */}
          <Point point={{ x: animation.x, y: animation.y }} />
        </Canvas>

        <Controls>
          <AnimationControls animation={animation} />
        </Controls>

        <Debug />
      </Func>
    </div>
  );
};
