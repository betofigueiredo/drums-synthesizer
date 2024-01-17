import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { updateSong } from "features/studio/studioSlice";
import Input from "components/ui2/Input";
import SaveSongButton from "../SaveSongButton";

const Header = () => {
  const dispatch = useAppDispatch();
  const kit = useAppSelector((state) => state.studio.song.kit);
  const songName = useAppSelector((state) => state.studio.song.name);

  const onChangeName = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(updateSong({ name: event.target.value }));
  };

  // const onChangeKit = (
  //   event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  // ) => {
  //   // setSongName(event.target.value);
  // };

  return (
    <div className="fixed left-0 top-0 z-10 h-44 w-full bg-background-main pl-24">
      <div className="flex items-stretch">
        <div className="h-44 border-r border-gray-700 pl-12 pr-12 pt-12">
          <Input label="Song name" value={songName} onChange={onChangeName} />
        </div>
        <div className="h-44 border-r border-gray-700 pl-12 pr-12 pt-12">
          <Input label="Kit" value={kit?.name || ""} onChange={onChangeName} />
        </div>
        <div className="h-44 pl-12 pr-12 pt-12">
          <SaveSongButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
