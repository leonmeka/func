import {
  AnimationControls,
  Area,
  Circle,
  Controls,
  Func,
  Line,
  Point,
  Rect,
  useAnimation,
  Vector,
} from "@func/index";

export const App = () => {
  const animation = useAnimation({
    y: (x: number) => x,
    duration: 1000,
    range: [0, 1],
  });

  return (
    <div className="w-dvw h-dvh">
      <Func debug>
        <Area
          points={[
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 1, y: 0 },
          ]}
        />
        <Point point={{ x: animation.x, y: animation.y }} />
        <Line from={{ x: 0, y: 0 }} to={{ x: animation.x, y: animation.y }} />
        <Circle center={{ x: animation.x, y: animation.y }} radius={1} />
        <Vector from={{ x: 0, y: 0 }} to={{ x: 1, y: 1 }} />
        <Rect from={{ x: 1, y: 1 }} to={{ x: 2, y: 2 }} />
        <Controls>
          <AnimationControls animation={animation} />
        </Controls>
      </Func>
    </div>
  );
};
