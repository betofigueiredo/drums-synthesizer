import PlayButton from "components/studio/PlayButton";
import Bpm from "components/studio/Bpm";

const ControlBar = () => {
  return (
    <div className="fixed bottom-0 left-0 h-24 w-full border-t border-gray-700 bg-background-main pl-24">
      <div className="flex items-stretch rounded-lg">
        <PlayButton />
        <div className="col-span-4 border-r border-gray-700 p-7 pl-11 pr-11">
          <Bpm />
        </div>
      </div>
    </div>
  );
};

export default ControlBar;
