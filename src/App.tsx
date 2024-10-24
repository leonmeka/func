import { useAnimation } from "@core/hooks/use-animation";

import { Func } from "@core/components/func/func";
import { Canvas } from "@core/components/canvas/canvas";
import { Grid } from "@core/components/grid/grid";
import { Function } from "@core/components/primitives/function";
import { Controls } from "@core/components/controls/controls";
import { AnimationControls } from "@core/components/controls/animation-controls/animation-controls";
import { Debug } from "@core/components/debug/debug";

export const App = () => {
  const f = (x: number) => Math.sin(x);
  const g = (x: number) => Math.sin(x + animation.value);

  const animation = useAnimation({
    y: f,
    duration: 5_000,
    range: [-5, 5],
  });

  return (
    <div className="dark w-dvw h-dvh">
      <Func>
        <Canvas>
          <Grid />
          <Function y={g} />
        </Canvas>

        <Controls>
          <AnimationControls animation={animation} />
        </Controls>

        <Debug />
      </Func>
    </div>
  );
};
