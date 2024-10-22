import { CoordinateSystem } from "@/core/components/coordinate-system/coordinate-system";
import { Grid } from "@/core/components/grid/grid";
import { Function } from "@/core/components/function/function";

export const App = () => {
  return (
    <div className="w-dvw h-dvh" >
      <CoordinateSystem rangeX={[-10, 10]} rangeY={[-10, 10]}  >
        <Grid steps={1} />
        <Function y={(x) => x * Math.cos(x)} resolution={0.1} color="blue" />
      </CoordinateSystem>
    </div>
  );
};
