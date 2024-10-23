import { FunctionConstructions } from "@core/utils";

import { CoordinateSystem } from "@core/components/coordinate-system/coordinate-system";
import { Grid } from "@core/components/grid/grid";
import { Function } from "@core/components/primitives/function";
import { Debug } from "@core/components/debug/debug";
import { Plot } from "@core/components/plot/plot";

export const App = () => {
  const f = (x: number) => x * Math.sin(x);
  const g = (x: number) => x * Math.cos(x);
  const h = (x: number) => FunctionConstructions.SUBTRACT(f, g)(x);

  return (
    <div className="dark w-dvw h-dvh">
      <CoordinateSystem>
        <Plot>
          <Grid />

          <Function y={f} />
          <Function y={g} />
          <Function y={h} />
        </Plot>

        <Debug />
      </CoordinateSystem>
    </div>
  );
};
