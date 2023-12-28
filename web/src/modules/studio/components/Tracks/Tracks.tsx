import { useAppSelector, useAppDispatch } from "modules/shared/hooks/redux";
import { addTrack } from "modules/studio/features/studio/studioSlice";
import TrackControls from "modules/studio/components/TrackControls";
import TrackBeats from "modules/studio/components/TrackBeats";

const Tracks = () => {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.studio.tracks);
  const tracksIds = Object.keys(tracks);

  function addNewTrack() {
    dispatch(addTrack({ trackType: "tom" }));
  }

  return (
    <div className="relative h-screen w-full bg-background-dark pb-24 pl-24 pt-56">
      <div className="h-full w-full overflow-auto">
        <div className="flex h-full">
          <div className="relative h-full w-64 flex-none border-r border-solid border-[#303647] p-6">
            {tracksIds.map((trackId) => (
              <TrackControls key={trackId} track={tracks[trackId]} />
            ))}
          </div>
          <div className="relative flex-initial overflow-x-auto overflow-y-hidden p-6">
            {tracksIds.map((trackId) => (
              <TrackBeats key={trackId} track={tracks[trackId]} />
            ))}
          </div>
          {/* <div className="col-span-12">
          <button type="button" onClick={addNewTrack}>
            Add new track
          </button>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Tracks;
