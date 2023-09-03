import { useMemo } from "react";
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { ITrack } from "types/machine";
import {
  isStepActiveSelector,
  updateStep,
} from "features/machine/machineSlice";

const Step = ({ track, stepNumber }: { track: ITrack; stepNumber: number }) => {
  const dispatch = useAppDispatch();
  const stepLocation = useAppSelector((state) => state.machine.stepLocation);
  const isActive = useAppSelector((state) =>
    isStepActiveSelector(state.machine, track.type, stepNumber),
  );
  const audio = useMemo(
    () => new Howl({ src: [track.audioFile] }),
    [track.audioFile],
  );

  function getClassName() {
    let className = isActive
      ? "m-0.5 h-14 w-14 rounded-full border-[3px] border-solid border-cyan-300 bg-cyan-400 shadow-[0_0_6px_3px_rgb(34,211,238,40%)]"
      : "m-0.5 h-14 w-14 rounded-full border-[3px] border-solid border-black shadow-[inset_0_1px_1px_0_rgb(255,255,255,7%)] hover:bg-gray-700";
    if (stepLocation === stepNumber && isActive && !track.muted)
      className += " bg-cyan-300 shadow-[0_0_16px_9px_rgb(34,211,238,50%)]";
    return className;
  }

  function tickClickHandler() {
    if (!isActive) audio.play();
    dispatch(updateStep({ trackType: track.type, step: stepNumber }));
  }

  return (
    <button
      type="button"
      className={getClassName()}
      onClick={tickClickHandler}
    />
  );
};

export default Step;
