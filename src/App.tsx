import {
  Func,
  Canvas,
  Function,
  Point,
  Controls,
  AnimationControls,
  useAnimation,
} from "@func/index";

export const App = () => {
  // Define the animation function
  const f = (x: number) => x * Math.sin(x) + Math.cos(x);

  // Setup the animation
  const animation = useAnimation({
    y: f,
    duration: 5_000, // = 5s
    range: [-10, 10], // = [-10 -> 10] on x-axis
  });

  return (
    <div className="w-dvw h-dvh">
      <Func>
        <Canvas>
          {/* Visualize the animation function */}
          <Function y={f} color="muted" />

          {/* Visualize an animated point */}
          <Point point={{ x: animation.x, y: animation.y }} />
        </Canvas>

        <Controls>
          <AnimationControls animation={animation} />
        </Controls>
      </Func>
    </div>
  );
};