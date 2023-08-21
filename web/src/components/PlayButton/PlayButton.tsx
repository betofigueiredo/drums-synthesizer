import { useState, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { useTimer } from "react-use-precision-timer";
import { updateStepLocation } from "features/machine/machineSlice";

const PlayButton = () => {
  const dispatch = useAppDispatch();
  const bpm = useAppSelector((state) => state.machine.bpm);
  const blocks = useAppSelector((state) => state.machine.blocks);
  const [step, setStep] = useState<number>(0);

  const playerHandler = useCallback(() => {
    const end = blocks * 4;
    const nextStep = step === end ? 1 : step + 1;
    dispatch(updateStepLocation({ isPlaying: true, stepLocation: nextStep }));
    setStep(nextStep);
  }, [step, dispatch, blocks]);

  const delay = Math.round(60000 / bpm / 4);

  const timer = useTimer({ delay, fireOnStart: true }, playerHandler);

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
