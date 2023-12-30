import { useAppSelector } from "hooks/redux";
import TrackControls from "components/studio/TrackControls";
import TrackBeats from "components/studio/TrackBeats";
import BlocksButtons from "components/studio/BlocksButtons";

const Tracks = () => {
  const tracks = useAppSelector((state) => state.studio.tracks);
  const tracksIds = Object.keys(tracks);

  return (
    <div className="relative h-screen w-full bg-background-dark pb-24 pl-24 pt-56">
      <div className="h-full w-full overflow-auto">
        <div className="flex h-full">
          <div className="relative h-full w-64 flex-none border-r border-solid border-[#303647] p-6">
            {tracksIds.map((trackId) => (
              <TrackControls key={trackId} track={tracks[trackId]} />
            ))}
          </div>
          <div className="relative flex-initial overflow-x-auto overflow-y-hidden p-6 pr-64">
            <div className="relative h-auto min-w-max">
              {tracksIds.map((trackId) => (
                <TrackBeats key={trackId} track={tracks[trackId]} />
              ))}
              <BlocksButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
