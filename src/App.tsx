import { CoordinateSystem } from "@core/components/coordinate-system";
import { Grid } from "@core/components/grid";
import { Function } from "@core/components/function";
import { Point } from "@core/components/point";

export const App = () => {
  return (
    <div className="dark w-dvw h-dvh">
      <CoordinateSystem>
        <Grid />

        <Point point={{ x: 4, y: 4 }} />

        <Function y={(x) => x} />
        <Function y={(x) => 2 ** (x - 2)} />
      </CoordinateSystem>
    </div>
  );
};
