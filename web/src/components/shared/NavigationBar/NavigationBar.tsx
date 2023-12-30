import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import NavigationItem from "./NavigationItem";

const NavigationBar = () => {
  return (
    <div
      id="navigation-bar"
      className="fixed left-0 top-0 z-20 h-screen w-24 border-r border-gray-700 bg-background-main"
    >
      <div className="absolute w-24 pt-7 text-center text-xl text-lime-300">
        <FontAwesomeIcon icon={faChartSimple} className="rotate-45" />
      </div>
      <ul className="relative m-0 flex h-full list-none flex-col justify-center gap-4">
        <NavigationItem to="/studio" label="Studio" icon="faMicrophoneLines" />
        <NavigationItem to="/songs" label="Songs" icon="faChartSimple" />
        <NavigationItem to="/kits" label="Kits" icon="faDrum" />
      </ul>
    </div>
  );
};

export default NavigationBar;
