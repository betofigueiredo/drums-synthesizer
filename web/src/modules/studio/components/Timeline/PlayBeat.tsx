import { useAppSelector } from "hooks/redux";

const PlayBeat = ({ stepNumber }: { stepNumber: number }) => {
  const stepLocation = useAppSelector((state) => state.machine.stepLocation);
  const isActive = stepLocation === stepNumber;

  function getClassName() {
    return "relative m-1 pt-2 w-12 text-sm";
  }

  return (
    <button type="button" className={getClassName()}>
      <div className="absolute left-[5px] top-4 h-[4px] w-[1px] bg-[#424756]" />
      {stepNumber}
      <div className="absolute right-[5px] top-4 h-[4px] w-[1px] bg-[#424756]" />
      <div className="absolute right-[-4px] top-[15px] h-[6px] w-[1px] bg-[#424756]" />
    </button>
  );
};

export default PlayBeat;
