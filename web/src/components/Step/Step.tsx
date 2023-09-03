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
    isStepActiveSelector(state.machine, track.type, stepNumber),
  );
  const audio = useMemo(
    () => new Howl({ src: [track.audioFile] }),
    [track.audioFile],
  );

  // function getBgColor() {
  //   let bgColor = Math.ceil(stepNumber / 4) % 2 === 0 ? "" : "";
  //   if (isActive) bgColor = "bg-cyan-400";
  //   return bgColor;
  // }

  function tickClickHandler() {
    if (!isActive) audio.play();
    dispatch(updateStep({ trackType: track.type, step: stepNumber }));
  }

  const className = isActive
    ? "m-0.5 h-14 w-14 rounded-full border-[3px] border-solid border-cyan-300 bg-cyan-400 shadow-[0_0_6px_3px_rgb(34,211,238,40%)]"
    : "m-0.5 h-14 w-14 rounded-full border-[3px] border-solid border-black shadow-[inset_0_1px_1px_0_rgb(255,255,255,7%)] hover:bg-gray-700";

  return (
    <button type="button" className={className} onClick={tickClickHandler} />
  );
};

export default Step;
