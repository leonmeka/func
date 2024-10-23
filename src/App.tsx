import { CoordinateSystem } from "@core/components/coordinate-system";
import { Grid } from "@core/components/grid";
import { Function } from "@core/components/function";

import { FunctionConstructions } from "@core/utils";

export const App = () => {
  const f = (x: number) => x * Math.sin(x);
  const g = (x: number) => x * Math.cos(x);
  const h = (x: number) => FunctionConstructions.COMPOSE(f, g)(x);

  return (
    <div className="dark w-dvw h-dvh">
      <CoordinateSystem>
        <Grid />

        <Function y={h} />
      </CoordinateSystem>
    </div>
  );
};
