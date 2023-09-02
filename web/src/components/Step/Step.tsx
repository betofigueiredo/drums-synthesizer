import { useMemo } from "react";
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { ITrack } from "types/machine";
import {
  isStepActiveSelector,
  updateStep,
} from "features/machine/machineSlice";

const Step = ({ track, stepNumber }: { track: ITrack; stepNumber: number }) => {
  const dispatch = useAppDispatch();
  const isActive = useAppSelector((state) =>
    isStepActiveSelector(state.machine, track.type, stepNumber)
  );
  const audio = useMemo(
    () => new Howl({ src: [track.audioFile] }),
    [track.audioFile]
  );

  function getBgColor() {
    let bgColor = Math.ceil(stepNumber / 4) % 2 === 0 ? "bg-[#181C27]" : "";
    if (isActive) bgColor = "bg-cyan-400";
    return bgColor;
  }

  function tickClickHandler() {
    if (!isActive) audio.play();
    dispatch(updateStep({ trackType: track.type, step: stepNumber }));
  }

  return (
    <button
      type="button"
      className={`w-12 h-12 m-0.5 rounded border-2 border-solid border-cyan-800 ${getBgColor()}`}
      onClick={tickClickHandler}
    />
  );
};

export default Step;
