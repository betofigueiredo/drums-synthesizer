import { useAppSelector } from "hooks/redux";
import { ITrack } from "types/machine";
import Step from "components/Step/Step";

const TrackBeats = ({ track }: { track: ITrack }) => {
  const blocks = useAppSelector((state) => state.machine.blocks);
  const blocksList = Array.from({ length: blocks * 4 }, (_, idx) => idx + 1);

  return (
    <div className="h-16 min-w-max">
      {blocksList.map((stepNumber) => (
        <Step key={stepNumber} track={track} stepNumber={stepNumber} />
      ))}
    </div>
  );
};

export default TrackBeats;