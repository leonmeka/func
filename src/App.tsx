import { Angle, Func, Line } from "@func/index";
import { useRef } from "react";

export const App = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  return (
    <div className="w-dvw h-dvh">
      <Func debug>
        <Line ref={line1Ref} from={{ x: 0, y: 0 }} to={{ x: 2, y: 0 }} />
        <Line ref={line2Ref} from={{ x: 1, y: 2 }} to={{ x: 2, y: 0 }} />
        <Angle lines={[line1Ref, line2Ref]} />
      </Func>
    </div>
  );
};
