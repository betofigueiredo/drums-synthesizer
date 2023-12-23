import NavigationBar from "modules/shared/components/NavigationBar";
import Header from "modules/studio/components/Header";
import Timeline from "modules/studio/components/Timeline";
import ControlBar from "modules/studio/components/ControlBar";
import Tracks from "modules/studio/components/Tracks";

const Studio = () => {
  return (
    <>
      <NavigationBar />
      <Header />
      <Timeline />
      <Tracks />
      <ControlBar />
    </>
  );
};

export default Studio;
