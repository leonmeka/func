import { CoordinateSystem } from "@core/components/coordinate-system/coordinate-system";
import { Grid } from "@core/components/grid/grid";
import { Function } from "@core/components/primitives/function";
import { Debug } from "@core/components/debug/debug";
import { Plot } from "@core/components/plot/plot";

import { useAnimation } from "@core/hooks/use-animation";
import { Controls } from "@core/components/controls/controls";

export const App = () => {
  const f = (x: number) => x;
  const g = (x: number) => animation.value + Math.sin(x);

  const animation = useAnimation({
    y: f,
    duration: 1_000,
    range: [-2, 2],
  });


  return (
    <div className="dark w-dvw h-dvh">
      <CoordinateSystem>
        <Plot>
          <Grid />

          <Function y={f} />
          <Function y={g} />
        </Plot>

        <Debug />
        <Controls animation={animation} />
      </CoordinateSystem>
    </div>
  );
};
