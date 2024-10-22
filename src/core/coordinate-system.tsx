import { Function } from "./function";
import { Grid } from "./grid";
import { Plot } from "./plot";

interface CoordinateSystemProps {
  func: Function;
}

export const CoordinateSystem = ({ func }: CoordinateSystemProps) => {
  const minX = -10;
  const maxX = 10;
  const step = 0.1;

  const width = window.innerWidth;
  const height = window.innerHeight;

  const size = Math.min(width, height);

  const scaleX = size / (maxX - minX);
  const scaleY = size / (maxX - minX);

  const origin = { x: size / 2, y: size / 2 };

  return (
    <main className="w-screen h-screen">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full p-4">
        <Grid origin={origin} scaleX={scaleX} scaleY={scaleY} />
        <Plot
          func={func}
          origin={origin}
          step={step}
          scaleX={scaleX}
          scaleY={scaleY}
        />
      </svg>

      <span className="absolute bottom-0 right-0 p-4 font-semibold text-xl">
        {func.toString()}
      </span>
    </main>
  );
};
