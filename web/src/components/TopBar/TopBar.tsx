import PlayButton from "components/PlayButton";
import TimeView from "components/TimeView";

const TopBar = () => (
  <div className="flex items-stretch h-16">
    <div className="py-4">logo</div>
    <div className="py-4 pl-4 pr-4">
      <PlayButton />
    </div>
    <div className="py-4 pl-4 pr-4">
      <TimeView />
    </div>
    ;<div className="py-4">user account</div>
  </div>
);

export default TopBar;
