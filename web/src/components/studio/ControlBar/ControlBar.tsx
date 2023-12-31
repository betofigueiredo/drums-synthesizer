import { useState, useCallback, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { useTimer, TimerRenderer } from "react-use-precision-timer";
import { updateStepLocation } from "features/studio/studioSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faRepeat,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import Button from "components/ui/Button";
import Bpm from "components/studio/Bpm";

const ControlBar = () => {
  const dispatch = useAppDispatch();
  const bpm = useAppSelector((state) => state.studio.bpm);
  const blocks = useAppSelector((state) => state.studio.blocks);
  const [step, setStep] = useState<number>(0);
  const [loop, setLoop] = useState<boolean>(true);
  const lastStep = blocks * 4;

  const playerHandler = useCallback(() => {
    const nextStep = step === lastStep ? 1 : step + 1;
    dispatch(updateStepLocation({ isPlaying: true, stepLocation: nextStep }));
    setStep(nextStep);
  }, [step, dispatch, lastStep]);

  const delay = Math.round(60000 / bpm / 4);

  // console.log(delay * step);

  const timer = useTimer({ delay, fireOnStart: true }, playerHandler);

  const start = () => {
    timer.start();
  };

  const pause = () => {
    timer.pause();
    dispatch(updateStepLocation({ isPlaying: false }));
  };

  const stop = useCallback(() => {
    timer.stop();
    dispatch(updateStepLocation({ isPlaying: false, stepLocation: 0 }));
    setStep(0);
  }, [timer, dispatch, setStep]);

  const toggleLoop = () => {
    setLoop(!loop);
  };

  const msToHMS = (ms: number) => {
    return new Date(ms).toISOString().slice(14, 22);
  };

  useEffect(() => {
    if (!loop && step === lastStep) {
      stop();
    }
  }, [stop, loop, step, lastStep]);

  return (
    <div className="fixed bottom-0 left-0 h-24 w-full border-t border-gray-700 bg-background-main pl-24">
      <div className="flex items-stretch">
        <div className="border-r border-gray-700 p-7 pl-12 pr-9">
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
            <button
              type="button"
              onClick={toggleLoop}
              className={
                loop
                  ? `ml-1 h-12 w-12 text-lime-300 outline-0`
                  : `ml-1 h-12 w-12 text-gray-500 outline-0`
              }
            >
              <FontAwesomeIcon icon={faRepeat} />
            </button>
          </div>
        </div>
        <div className="border-r border-gray-700 p-5 pl-12 pr-12">
          <div className="w-full text-xs tracking-widest text-gray-400">
            Time
          </div>
          <div className="w-full text-3xl font-bold text-gray-200">
            <TimerRenderer
              timer={timer}
              render={(t) => <>{msToHMS(t.getElapsedRunningTime())}</>}
              renderRate={10}
            />
          </div>
        </div>
        <div className="col-span-4 border-r border-gray-700 p-5 pl-11 pr-11">
          <Bpm />
        </div>
      </div>
    </div>
  );
};

export default ControlBar;
