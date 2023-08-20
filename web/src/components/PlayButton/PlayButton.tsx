import { useState, useCallback } from "react";
import { useAppSelector } from "hooks/redux";
import { useTimer } from "react-use-precision-timer";
import { Howl } from "howler";

const PlayButton = () => {
  const bpm = useAppSelector((state) => state.machine.bpm);
  const [location, setLocation] = useState<number>(0);

  const callback = useCallback(() => {
    const sound = new Howl({
      src: ["/audio/acoustic-snare-06.wav"],
      volume: 1,
    });
    sound.play();
    setLocation((prevLocation) => prevLocation + 1);
  }, []);

  const delay = Math.round(60000 / bpm / 4);

  const timer = useTimer({ delay, fireOnStart: true }, callback);

  function start() {
    timer.start();
  }

  function stop() {
    timer.stop();
    setLocation(0);
  }

  return (
    <div>
      {location}
      <button type="button" onClick={start}>
        Play
      </button>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
};

export default PlayButton;
