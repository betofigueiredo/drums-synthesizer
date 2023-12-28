import { useAppSelector } from "modules/shared/hooks/redux";
import { ITrack } from "types/studio";
import Step from "modules/studio/components/Step";

const TrackBeats = ({ track }: { track: ITrack }) => {
  const blocks = useAppSelector((state) => state.studio.blocks);
  const blocksList = Array.from({ length: blocks * 4 }, (_, idx) => idx + 1);

  return (
    <div className="h-auto min-w-max">
      {blocksList.map((stepNumber) => (
        <Step key={stepNumber} track={track} stepNumber={stepNumber} />
      ))}
    </div>
  );
};

export default TrackBeats;
