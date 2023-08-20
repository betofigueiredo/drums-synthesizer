import { useAppSelector } from "hooks/redux";
import { ITrackType } from "types/machine";
import { isStepActiveSelector } from "../../features/machine/machineSlice";

const Step = ({
  trackType,
  stepNumber,
}: {
  trackType: ITrackType;
  stepNumber: number;
}) => {
  const isActive = useAppSelector((state) =>
    isStepActiveSelector(state.machine, trackType, stepNumber)
  );

  let bgColor =
    Math.ceil(stepNumber / 4) % 2 === 0 ? "bg-gray-300" : "bg-gray-400";
  if (isActive) bgColor = "bg-purple-600";

  function tickClickHandler(stepNumber: number) {
    console.log(stepNumber);
  }

  return (
    <button
      type="button"
      className={`w-12 h-12 rounded border border-solid border-gray-500 ${bgColor}`}
      onClick={() => tickClickHandler(stepNumber)}
    />
  );
};

export default Step;
