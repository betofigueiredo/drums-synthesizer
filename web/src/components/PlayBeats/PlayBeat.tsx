import { useAppSelector } from "hooks/redux";

const PlayBeat = ({ stepNumber }: { stepNumber: number }) => {
  const stepLocation = useAppSelector((state) => state.machine.stepLocation);
  const isActive = stepLocation === stepNumber;

  function getClassName() {
    let className = isActive
      ? "m-1.5 h-2 w-12 rounded-full bg-cyan-400 shadow-[0_0_6px_3px_rgb(34,211,238,40%)]"
      : "m-1.5 h-2 w-12 rounded-full bg-gray-900 shadow-[inset_0_1px_1px_0_rgb(255,255,255,7%)]";
    if (stepNumber % 4 === 0) {
      className += " mr-7";
    }
    return className;
  }

  return <button type="button" className={getClassName()} />;
};

export default PlayBeat;
