import NavigationBar from "modules/shared/components/NavigationBar";
import Header from "modules/studio/components/Header";
import Timeline from "modules/studio/components/Timeline";
import ControlBar from "modules/studio/components/ControlBar";

const Studio = () => {
  return (
    <>
      <NavigationBar />
      <Header />
      <Timeline />

      <div className="bg-background-dark relative h-screen w-full pb-24 pl-24 pt-56">
        <div className="h-full w-full overflow-auto">
          <p>asdasdasd</p>
        </div>
      </div>

      <ControlBar />
    </>
  );
};

export default Studio;
