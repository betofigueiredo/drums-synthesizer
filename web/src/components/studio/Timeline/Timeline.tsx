import { useAppSelector } from "hooks/redux";
import PlayBeat from "./PlayBeat";

const Timeline = () => {
  const blocks = useAppSelector((state) => state.studio.blocks);
  const blocksList = Array.from({ length: blocks * 4 }, (_, idx) => idx + 1);

  return (
    <div className="lef-0 fixed top-44 z-10 h-12 w-full border-b border-t border-gray-700 bg-background-main">
      <div className="h-full min-w-max pl-64">
        <div className="ml-[-1px] h-full border-l border-gray-700 bg-background-main pl-6">
          {blocksList.map((stepNumber) => (
            <PlayBeat key={stepNumber} stepNumber={stepNumber} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
