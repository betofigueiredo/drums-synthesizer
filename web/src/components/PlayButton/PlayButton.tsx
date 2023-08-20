import { useState, useCallback } from "react";
import { useAppSelector } from "hooks/redux";
import { useTimer } from "react-use-precision-timer";
import { Howl } from "howler";

const PlayButton = () => {
  const bpm = useAppSelector((state) => state.machine.bpm);
  const tracks = useAppSelector((state) => state.machine.tracks);
  const [step, setStep] = useState<number>(1);

  const callback = useCallback(() => {
    const snare = new Howl({
      src: ["/audio/acoustic-snare-06.wav"],
      volume: 1,
    });
    const kick = new Howl({
      src: ["/audio/acoustic-kick-03.wav"],
      volume: 1,
    });
    if (tracks.snare.steps[step]) {
      snare.play();
    }
    if (tracks.kick.steps[step]) {
      kick.play();
    }
    setStep(step + 1);
  }, [step, tracks]);

  const delay = Math.round(60000 / bpm / 4);

  const timer = useTimer({ delay, fireOnStart: true }, callback);

  function start() {
    timer.start();
  }

  function stop() {
    timer.stop();
    setStep(1);
  }

  return (
    <div>
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
