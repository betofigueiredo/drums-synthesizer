import PlayButton from "components/PlayButton";
import Bpm from "components/Bpm";
import TimeView from "components/TimeView";

const TopBar = () => (
  <div className="mb-4 flex items-stretch rounded-lg bg-gray-800">
    <div className="border-r-2 border-gray-900 p-7 pl-9 pr-11">
      <PlayButton />
    </div>
    <div className="col-span-4 border-r-2 border-gray-900 p-7 pl-11 pr-11">
      <Bpm />
    </div>
    <div className="col-span-4">
      <TimeView />
    </div>
  </div>
);

export default TopBar;
