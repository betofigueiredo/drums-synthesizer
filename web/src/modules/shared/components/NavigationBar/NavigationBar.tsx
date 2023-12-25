import NavigationItem from "./NavigationItem";

const NavigationBar = () => {
  return (
    <div
      id="navigation-bar"
      className="fixed left-0 top-0 z-20 h-screen w-24 border-r border-gray-700 bg-background-main"
    >
      <ul className="relative m-0 flex h-full list-none flex-col justify-center gap-4">
        <NavigationItem to="/studio" label="Studio" icon="faMicrophoneLines" />
        <NavigationItem to="/songs" label="Songs" icon="faChartSimple" />
        <NavigationItem to="/kits" label="Kits" icon="faDrum" />
      </ul>
    </div>
  );
};

export default NavigationBar;
