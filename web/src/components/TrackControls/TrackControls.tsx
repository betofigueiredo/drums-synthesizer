import { useAppSelector } from "hooks/redux";
import { ITrack } from "types/machine";
import TrackAudioPlayer from "components/TrackAudioPlayer";

const TrackControls = ({ track }: { track: ITrack }) => {
  const blocks = useAppSelector((state) => state.machine.blocks);

  return (
    <>
      <div className="h-16">
        <p className="text-sm font-semibold uppercase leading-6 text-blue-100">
          {track.type}
        </p>
      </div>
      <TrackAudioPlayer track={track} />
    </>
  );
};

export default TrackControls;
