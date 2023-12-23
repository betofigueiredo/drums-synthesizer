import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { updateBpm } from "features/machine/machineSlice";

const Bpm = () => {
  const dispatch = useAppDispatch();
  const bpm = useAppSelector((state) => state.machine.bpm);

  function bpmHandler(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    dispatch(updateBpm({ bpm: Number(event.target.value) }));
  }

  return (
    <div className="flex items-center">
      <input
        type="number"
        value={bpm}
        onChange={bpmHandler}
        className="w-28 rounded border-2 border-gray-950 bg-gray-900 p-2 text-center text-xl font-bold text-gray-300"
      />
      <div className="text pl-3 font-bold text-gray-300">BPM</div>
    </div>
  );
};

export default Bpm;
