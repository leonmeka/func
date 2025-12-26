import { Func, Point } from "@func/index";

export const App = () => {
  return (
    <div className="w-dvw h-dvh">
      <Func>
        <Point point={{ x: 0, y: 0 }} />
      </Func>
    </div>
  );
};
