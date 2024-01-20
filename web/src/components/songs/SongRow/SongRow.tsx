import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Button } from "components/ui/button";
import { Song } from "types/studio";

const SongRow = ({ song }: { song: Song }) => {
  return (
    <div className="flex flex-row rounded-md bg-background-dark p-5">
      <div className="basis-5/12">
        <FontAwesomeIcon icon={faMusic} />
        <span className="pl-5 text-xl font-semibold">{song.name}</span>
      </div>
      <div className="basis-2/12">
        <div className="mb-1 w-full text-xs tracking-widest text-gray-400">
          BPM
        </div>
        <div className="font-medium">{song.bpm}</div>
      </div>
      <div className="basis-3/12">
        <div className="mb-1 w-full text-xs tracking-widest text-gray-400">
          Kit
        </div>
        <div className="font-medium">{song?.kit?.name}</div>
      </div>
      <div className="basis-2/12 text-right">
        <Link to={`/studio/${song.id}`}>
          <Button>Open in studio</Button>
        </Link>
      </div>
    </div>
  );
};

export default SongRow;
