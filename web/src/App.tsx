import NavigationBar from "components/NavigationBar";
import StudioHeader from "components/StudioHeader";
import StudioTimeline from "components/StudioTimeline";

function App() {
  return (
    <>
      <NavigationBar />
      <StudioHeader />
      <StudioTimeline />

      <div className="bg-background-dark relative h-screen w-full pb-24 pl-24 pt-56">
        <div className="h-full w-full overflow-auto">
          <p>asdasdasd</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 h-24 w-full border-t border-gray-700 bg-background-main pl-24">
        play bar
      </div>
    </>
  );
}

export default App;
