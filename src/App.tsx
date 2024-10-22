import { CoordinateSystem } from "@/core/components/coordinate-system/coordinate-system";
import { Grid } from "@/core/components/grid/grid";
import { Function } from "@/core/components/function/function";

export const App = () => {
  return (
    <div className="w-dvw h-dvh" >
      <CoordinateSystem>
        <Grid />
        <Function y={(x) => Math.cos(x)} color="blue" />
        <Function y={(x) => Math.sin(x)} color="red" />
      </CoordinateSystem>
    </div >
  );
};
