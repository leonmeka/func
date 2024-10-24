import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";

import { useAnimation } from "@core/hooks/use-animation";

interface ControlsProps {
  animation: ReturnType<typeof useAnimation>;
}

export const Controls = ({ animation }: ControlsProps) => {
  const { isPlaying, start, stop } = animation;

  return (
    <div className="absolute flex bottom-0 right-0 p-4 text-muted-foreground text-xs gap-1">

      <div className="flex gap-4 items-center">
        <div className="flex gap-1">
          {!isPlaying && (
            <button onClick={start}>
              <PlayIcon width={24} height={24} />
            </button>
          )}

          {isPlaying && (
            <button onClick={stop}>
              <PauseIcon width={24} height={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
