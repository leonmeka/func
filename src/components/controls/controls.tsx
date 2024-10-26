import { PropsWithChildren } from "react";

export const Controls = ({ children }: PropsWithChildren) => {
  return (
    <div className="absolute flex bottom-0 right-0 p-4 text-xs gap-1">
      {children}
    </div>
  );
};
