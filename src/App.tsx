import { CoordinateSystem } from "./core/components/coordinate-system/coordinate-system";
import { Grid } from "@/core/components/grid/grid";
import { Function } from "@/core/components/function/function";

export const App = () => {
  return (
    <div className="w-dvw h-dvh" >
      <CoordinateSystem>
        <Grid />
        <Function y={(x) => x * Math.tan(x)} color="blue" />
      </CoordinateSystem>
    </div>
  );
};
