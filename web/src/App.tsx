import Tracks from "components/Tracks/Tracks";
import TopBar from "components/TopBar";

function App() {
  return (
    <div className="container mx-auto mt-8">
      <div className="lg container rounded-lg bg-gray-900 p-4">
        <TopBar />
        <Tracks />
      </div>
    </div>
  );
}

export default App;
