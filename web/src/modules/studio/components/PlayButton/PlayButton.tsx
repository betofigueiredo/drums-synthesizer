import { useState, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { useTimer } from "react-use-precision-timer";
import { updateStepLocation } from "features/machine/machineSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import Button from "components/ui/Button";

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

  console.log(delay * step);

  const timer = useTimer({ delay, fireOnStart: true }, playerHandler);

  function start() {
    timer.start();
  }

  function pause() {
    timer.pause();
    dispatch(updateStepLocation({ isPlaying: false }));
  }

  function stop() {
    timer.stop();
    dispatch(updateStepLocation({ isPlaying: false, stepLocation: 0 }));
    setStep(0);
  }

  return (
    <div className="flex gap-3">
      {(timer.isPaused() || timer.isStopped()) && (
        <Button color="green" onClick={start}>
          <FontAwesomeIcon icon={faPlay} />
        </Button>
      )}
      {timer.isRunning() && (
        <Button color="yellow" onClick={pause}>
          <FontAwesomeIcon icon={faPause} />
        </Button>
      )}
      <Button onClick={stop}>
        <FontAwesomeIcon icon={faStop} />
      </Button>
    </div>
  );
};

export default PlayButton;
