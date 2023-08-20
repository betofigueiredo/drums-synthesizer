import PlayButton from "./components/PlayButton/PlayButton";

function App() {
  const tracks = [
    { id: 1, name: "SNARE", audio: "" },
    { id: 2, name: "HIHAT", audio: "" },
    { id: 3, name: "KICK", audio: "" },
  ];

  return (
    <div>
      <PlayButton />
      {tracks.map((track) => (
        <div key={track.id}>{track.name}</div>
      ))}
    </div>
  );
}

export default App;
