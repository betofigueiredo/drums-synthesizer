import { useAppSelector, useAppDispatch } from "hooks/redux";
import { addTrack } from "features/machine/machineSlice";
import TrackControls from "components/TrackControls/TrackControls";
import TrackBeats from "components/TrackBeats/TrackBeats";

const Tracks = () => {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.machine.tracks);
  const tracksList = Object.values(tracks);

  function addNewTrack() {
    dispatch(addTrack({ trackType: "tom" }));
  }

  return (
    <div className="lg container rounded-2xl bg-gray-900 p-5">
      <div className="grid grid-cols-12 gap-4 rounded-2xl bg-gray-800 p-6">
        <div className="col-span-2">
          {tracksList.map((track) => (
            <TrackControls key={track.type} track={track} />
          ))}
        </div>
        <div className="col-span-10 overflow-x-auto overflow-y-hidden">
          {tracksList.map((track) => (
            <TrackBeats key={track.type} track={track} />
          ))}
        </div>
        <div className="col-span-12">
          <button type="button" onClick={addNewTrack}>
            Add new track
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
