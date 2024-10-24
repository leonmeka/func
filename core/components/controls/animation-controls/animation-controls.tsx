import { PlayIcon, StopIcon } from "@radix-ui/react-icons";

import { useAnimation } from "@core/hooks/use-animation";

interface ControlsProps {
  animation: ReturnType<typeof useAnimation>;
}

export const AnimationControls = ({ animation }: ControlsProps) => {
  const { isPlaying, start, stop } = animation;

  return (
    <div className="flex gap-4 items-center">
      <div className="flex gap-1">
        {!isPlaying && (
          <button onClick={start} className="flex gap-1 items-center">
            <span className="text-sm font-semibold">Play</span>
            <PlayIcon width={24} height={24} />
          </button>
        )}

        {isPlaying && (
          <button onClick={stop} className="flex gap-1 items-center">
            <span className="text-sm font-semibold">Stop</span>
            <StopIcon width={24} height={24} />
          </button>
        )}
      </div>
    </div>
  );
};
