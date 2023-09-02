import { useState, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { useTimer } from "react-use-precision-timer";
import { updateStepLocation } from "features/machine/machineSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

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
      {timer.isStopped() ? (
        <button
          type="button"
          onClick={start}
          className="h-12 w-12 border-4 rounded border-gray-900 bg-green-300"
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>
      ) : (
        <button
          type="button"
          onClick={stop}
          className="h-12 w-12 border-4 rounded border-gray-900 bg-gray-700"
        >
          <FontAwesomeIcon icon={faStop} />
        </button>
      )}
    </div>
  );
};

export default PlayButton;
