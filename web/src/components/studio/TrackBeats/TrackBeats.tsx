import { useAppSelector } from "hooks/redux";
import { StudioTrack } from "types/studio";
import Step from "components/studio/Step";

const TrackBeats = ({ track }: { track: StudioTrack }) => {
  const blocks = useAppSelector((state) => state.studio.song.blocks);
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
