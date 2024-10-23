import { CoordinateSystem } from "@core/components/coordinate-system";
import { Grid } from "@core/components/grid";
import { Function } from "@core/components/function";

import { AffineTransformation } from "@core/utils";

export const App = () => {
  const f = (x: number) => x * Math.sin(x);
  const g = (x: number) => AffineTransformation.TRANSLATE(f, 0, 2)(x);

  return (
    <div className="dark w-dvw h-dvh">
      <CoordinateSystem>
        <Grid />

        <Function y={f} />
        <Function y={g} />
      </CoordinateSystem>
    </div>
  );
};
