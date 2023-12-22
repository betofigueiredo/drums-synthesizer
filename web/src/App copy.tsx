import Tracks from "components/Tracks/Tracks";
import TopBar from "components/TopBar";
import DownloadTest from "components/DownloadTest";

function App() {
  return (
    <div className="container mx-auto mt-8">
      <div className="lg container rounded-lg bg-gray-900 p-4">
        <div className="mb-4 flex h-14 items-stretch rounded-lg bg-gray-800"></div>
        <TopBar />
        <Tracks />
        <DownloadTest />
      </div>
    </div>
  );
}

export default App;
