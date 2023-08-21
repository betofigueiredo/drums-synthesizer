import { useState, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { useTimer } from "react-use-precision-timer";
import { updateStepLocation } from "../../features/machine/machineSlice";

const PlayButton = () => {
  const dispatch = useAppDispatch();
  const bpm = useAppSelector((state) => state.machine.bpm);
  const [step, setStep] = useState<number>(0);

  const callback = useCallback(() => {
    dispatch(updateStepLocation({ isPlaying: true, stepLocation: step + 1 }));
    setStep(step + 1);
  }, [step, dispatch]);

  const delay = Math.round(60000 / bpm / 4);

  const timer = useTimer({ delay, fireOnStart: true }, callback);

  function start() {
    timer.start();
  }

  function stop() {
    timer.stop();
    dispatch(updateStepLocation({ isPlaying: false, stepLocation: 0 }));
    setStep(0);
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
