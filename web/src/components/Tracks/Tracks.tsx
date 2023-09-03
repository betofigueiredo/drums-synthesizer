import { useAppSelector, useAppDispatch } from "hooks/redux";
import { addTrack } from "features/machine/machineSlice";
import TrackControls from "components/TrackControls/TrackControls";
import TrackBeats from "components/TrackBeats/TrackBeats";
import PlayBeats from "components/PlayBeats";

const Tracks = () => {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.machine.tracks);
  const tracksList = Object.values(tracks);

  function addNewTrack() {
    dispatch(addTrack({ trackType: "tom" }));
  }

  return (
    <div className="lg container rounded-2xl bg-gray-900 p-5">
      <div className="grid grid-cols-12 rounded-2xl bg-gray-800">
        <div className="col-span-2 border-r border-solid border-gray-700 border-opacity-30 p-6 pt-10">
          {tracksList.map((track) => (
            <TrackControls key={track.type} track={track} />
          ))}
        </div>
        <div className="relative col-span-10 overflow-x-auto overflow-y-hidden border-l border-solid border-[#000000] p-6 pt-10">
          <PlayBeats />
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
  );
};

export default Tracks;
