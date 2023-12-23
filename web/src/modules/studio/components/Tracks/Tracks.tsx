import { useAppSelector, useAppDispatch } from "hooks/redux";
import { addTrack } from "features/machine/machineSlice";
import TrackControls from "modules/studio/components/TrackControls";
import TrackBeats from "modules/studio/components/TrackBeats";

const Tracks = () => {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.machine.tracks);
  const tracksList = Object.values(tracks);

  function addNewTrack() {
    dispatch(addTrack({ trackType: "tom" }));
  }

  return (
    <div className="relative h-screen w-full bg-background-dark pb-24 pl-24 pt-56">
      <div className="h-full w-full overflow-auto">
        <div className="flex h-full">
          <div className="relative h-full w-64 flex-none border-r border-solid border-[#303647] p-6">
            {tracksList.map((track) => (
              <TrackControls key={track.type} track={track} />
            ))}
          </div>
          <div className="relative flex-initial overflow-x-auto overflow-y-hidden p-6">
            {tracksList.map((track) => (
              <TrackBeats key={track.type} track={track} />
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
