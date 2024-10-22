import { CoordinateSystem } from "@/core/components/coordinate-system/coordinate-system";
import { Grid } from "@/core/components/grid/grid";
import { Function } from "@/core/components/function/function";

export const App = () => {
  return (
    <div className="w-dvw h-dvh" >
      <CoordinateSystem rangeX={[-10, 10]} rangeY={[-10, 10]} step={1}  >
        <Grid />
        <Function y={(x) => x} color="blue" />
      </CoordinateSystem>
    </div>
  );
};
