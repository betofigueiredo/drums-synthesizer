import { useAppSelector } from "hooks/redux";
import Track from "components/Track/Track";

const Tracks = () => {
  const tracks = useAppSelector((state) => state.machine.tracks);
  const tracksList = Object.values(tracks);

  return (
    <div>
      {tracksList.map((track) => (
        <Track key={track.type} track={track} />
      ))}
    </div>
  );
};

export default Tracks;
