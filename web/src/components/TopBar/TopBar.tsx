import PlayButton from "components/PlayButton";
import TimeView from "components/TimeView";

const TopBar = () => (
  <div className="mb-4 grid grid-cols-12 rounded-lg bg-gray-800 p-7">
    <div className="col-span-4">
      <PlayButton />
    </div>
    <div className="col-span-4">
      <TimeView />
    </div>
    <div className="col-span-4">user account</div>
  </div>
);

export default TopBar;
