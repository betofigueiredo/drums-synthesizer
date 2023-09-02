import { useAppSelector, useAppDispatch } from "hooks/redux";
import Track from "components/Track/Track";
import { addTrack } from "features/machine/machineSlice";

const Tracks = () => {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.machine.tracks);
  const tracksList = Object.values(tracks);

  function addNewTrack() {
    dispatch(addTrack({ trackType: "tom" }));
  }

  return (
    <div>
      {tracksList.map((track) => (
        <Track key={track.type} track={track} />
      ))}
      <button type="button" onClick={addNewTrack}>
        Add new track
      </button>
    </div>
  );
};

export default Tracks;
