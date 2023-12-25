import { useAppSelector } from "modules/shared/hooks/redux";
import PlayBeat from "./PlayBeat";

const PlayBeats = () => {
  const blocks = useAppSelector((state) => state.machine.blocks);
  const blocksList = Array.from({ length: blocks * 4 }, (_, idx) => idx + 1);

  return (
    <div className="absolute top-2 h-16 min-w-max">
      {blocksList.map((stepNumber) => (
        <PlayBeat key={stepNumber} stepNumber={stepNumber} />
      ))}
    </div>
  );
};

export default PlayBeats;
