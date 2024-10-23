import { CoordinateSystem } from "@/core/components/coordinate-system";
import { Grid } from "@/core/components/grid";
import { Function } from "@/core/components/function";

export const App = () => {
  return (
    <div className="dark w-dvw h-dvh">
      <CoordinateSystem>
        <Grid />

        <Function y={(x) => Math.cos(x)} />
        <Function y={(x) => Math.sin(x)} />
        <Function y={(x) => 0.5 * x + 1} />
      </CoordinateSystem>
    </div>
  );
};
