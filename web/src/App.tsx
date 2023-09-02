import Tracks from "components/Tracks/Tracks";
import StepTracking from "components/StepTracking";
import TopBar from "components/TopBar";

function App() {
  return (
    <div className="container mx-auto">
      <TopBar />
      <Tracks />
      <StepTracking />
    </div>
  );
}

export default App;
