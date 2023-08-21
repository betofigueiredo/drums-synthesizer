import { useAppSelector } from "hooks/redux";
import { ITrack } from "types/machine";
import Step from "components/Step/Step";
import TrackAudioPlayer from "components/TrackAudioPlayer";

const Track = ({ track }: { track: ITrack }) => {
  const blocks = useAppSelector((state) => state.machine.blocks);
  const blocksList = Array.from({ length: blocks * 4 }, (_, idx) => idx + 1);

  return (
    <>
      <li className="flex justify-between gap-x-6">
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {track.type}
            </p>
          </div>
        </div>
        <div>
          {blocksList.map((stepNumber) => (
            <Step
              key={stepNumber}
              trackType={track.type}
              stepNumber={stepNumber}
            />
          ))}
        </div>
      </li>
      <TrackAudioPlayer track={track} />
    </>
  );
};

export default Track;
