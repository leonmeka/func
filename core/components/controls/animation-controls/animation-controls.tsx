import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";

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
                    <div className="flex gap-1 items-center">
                        <span className="text-sm font-semibold">Play</span>
                        <button onClick={start}>
                            <PlayIcon width={24} height={24} />
                        </button>
                    </div>
                )}

                {isPlaying && (
                    <div className="flex gap-2 items-center">
                        <span>Pause</span>
                        <button onClick={stop}>
                            <PauseIcon width={24} height={24} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
