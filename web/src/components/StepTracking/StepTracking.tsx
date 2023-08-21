import { useAppSelector } from "hooks/redux";

const StepTracking = () => {
  const stepLocation = useAppSelector((state) => state.machine.stepLocation);

  return <>{stepLocation}</>;
};

export default StepTracking;
