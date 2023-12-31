import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { updateBpm } from "features/studio/studioSlice";
import Input from "components/ui/Input";

const Bpm = () => {
  const dispatch = useAppDispatch();
  const bpm = useAppSelector((state) => state.studio.bpm);

  function bpmHandler(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    dispatch(updateBpm({ bpm: Number(event.target.value) }));
  }

  return (
    <div className="relative">
      <Input type="number" label="Kit" value={bpm} onChange={bpmHandler} />
    </div>
  );
};

export default Bpm;
