import { useAppSelector, useAppDispatch } from "hooks/redux";
import { ITrackType } from "types/machine";
import {
  isStepActiveSelector,
  updateStep,
} from "features/machine/machineSlice";

const Step = ({
  trackType,
  stepNumber,
}: {
  trackType: ITrackType;
  stepNumber: number;
}) => {
  const dispatch = useAppDispatch();
  const isActive = useAppSelector((state) =>
    isStepActiveSelector(state.machine, trackType, stepNumber)
  );

  let bgColor = Math.ceil(stepNumber / 4) % 2 === 0 ? "bg-[#181C27]" : "";
  if (isActive) bgColor = "bg-cyan-400";

  function tickClickHandler() {
    dispatch(updateStep({ trackType, step: stepNumber }));
  }

  return (
    <button
      type="button"
      className={`w-12 h-12 m-0.5 rounded border-2 border-solid border-cyan-800 ${bgColor}`}
      onClick={tickClickHandler}
    />
  );
};

export default Step;
