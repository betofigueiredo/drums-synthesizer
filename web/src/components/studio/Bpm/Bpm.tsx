import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { updateSong } from "features/studio/studioSlice";
import Input from "components/ui/Input";

const Bpm = () => {
  const dispatch = useAppDispatch();
  const bpm = useAppSelector((state) => state.studio.song.bpm);

  function bpmHandler(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    dispatch(updateSong({ bpm: Number(event.target.value) }));
  }

  return (
    <div className="relative w-28">
      <Input type="number" label="BPM" value={bpm} onChange={bpmHandler} />
    </div>
  );
};

export default Bpm;
