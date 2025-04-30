import { useAnimation } from "@func/hooks/use-animation";

interface ControlsProps {
  animation: ReturnType<typeof useAnimation>;
}

export const AnimationControls = ({ animation }: ControlsProps) => {
  const { isPlaying, start, stop } = animation;

  return (
    <div className="flex gap-4 items-center text-muted-foreground">
      <div className="flex gap-1">
        {!isPlaying && (
          <button onClick={start}>
            <span className="text-sm font-semibold">Play</span>
          </button>
        )}

        {isPlaying && (
          <button onClick={stop}>
            <span className="text-sm font-semibold">Stop</span>
          </button>
        )}
      </div>
    </div>
  );
};
