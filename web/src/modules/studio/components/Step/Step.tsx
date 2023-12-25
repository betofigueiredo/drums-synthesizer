import { useMemo } from "react";
import { useAppSelector, useAppDispatch } from "modules/shared/hooks/redux";
import { ITrack } from "types/machine";
import {
  isStepActiveSelector,
  updateStep,
} from "modules/studio/features/machine/machineSlice";

const Step = ({ track, stepNumber }: { track: ITrack; stepNumber: number }) => {
  const dispatch = useAppDispatch();
  const stepLocation = useAppSelector((state) => state.machine.stepLocation);
  const isActive = useAppSelector((state) =>
    isStepActiveSelector(state.machine, track.type, stepNumber),
  );
  const isPlaying = stepLocation === stepNumber && isActive && !track.muted;
  const audio = useMemo(
    () => new Howl({ src: [track.audioFile] }),
    [track.audioFile],
  );

  function getBackground() {
    if (isPlaying) {
      return " bg-lime-300";
    }
    if (isActive) {
      return " bg-lime-400";
    }
    const isDiffBlock = Math.floor((stepNumber - 1) / 4) % 2 !== 0;
    if (isDiffBlock) {
      return " bg-[#565A72]";
    }
    return " bg-[#3F435A]";
  }

  function getBorder() {
    if (isPlaying) {
      return " border-2 border-solid border-lime-300";
    }
    return " border-2 border-solid border-background-dark";
  }

  function getClassName() {
    // shadow-[0_0_6px_3px_rgb(34,211,238,40%)]
    // shadow-[inset_0_1px_1px_0_rgb(255,255,255,7%)]
    // shadow-[0_0_16px_9px_rgb(34,211,238,50%)]
    let className = "m-1 h-12 w-12 rounded-md transition-all";
    className += getBorder();
    className += getBackground();
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
