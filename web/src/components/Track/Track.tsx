import { useAppSelector } from "hooks/redux";
import { ITrack } from "types/machine";

const Track = ({ track }: { track: ITrack }) => {
  const blocks = useAppSelector((state) => state.machine.blocks);
  const blocksList = Array.from({ length: blocks }, (_, idx) => idx + 1);

  return (
    <div>
      <div>{track.type}</div>
      {blocksList.map((blockNumber) => (
        <div key={blockNumber}>{blockNumber}</div>
      ))}
    </div>
  );
};

export default Track;
