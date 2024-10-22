import { CoordinateSystem } from "./core/components/coordinate-system/coordinate-system";
import { Grid } from "@/core/components/grid/grid";
import { Function } from "@/core/components/function/function";

export const App = () => {
  return (
    <CoordinateSystem>
      <Grid />
      <Function y={(x) => x} color="green" />
    </CoordinateSystem>
  );
};
