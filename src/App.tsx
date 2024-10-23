import { CoordinateSystem } from "@/core/components/coordinate-system/coordinate-system";
import { Grid } from "@/core/components/grid/grid";
import { Function } from "@/core/components/function/function";

export const App = () => {
  return (
    <div className="w-dvw h-dvh">
      <CoordinateSystem>
        <Grid />
        <Function y={(x) => Math.cos(x)} color="blue" />
        <Function y={(x) => Math.sin(x)} color="red" />
        <Function y={(x) => 0.5 * x + 1} color="green" />
      </CoordinateSystem>
    </div>
  );
};
