import Tracks from "components/Tracks/Tracks";
import PlayButton from "components/PlayButton";
import StepTracking from "components/StepTracking";

function App() {
  return (
    <div className="container mx-auto">
      <Tracks />
      <PlayButton />
      <StepTracking />
    </div>
  );
}

export default App;
