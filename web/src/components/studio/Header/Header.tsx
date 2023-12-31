import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { updateSongName } from "features/studio/studioSlice";
import Input from "components/ui/Input";

const Header = () => {
  const dispatch = useAppDispatch();
  const selectedKit = useAppSelector((state) => state.studio.selectedKit);
  const songName = useAppSelector((state) => state.studio.songName);

  const onChangeName = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(updateSongName({ name: event.target.value }));
  };

  const onChangeKit = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    // setSongName(event.target.value);
  };

  return (
    <div className="fixed left-0 top-0 z-10 h-44 w-full bg-background-main pl-24">
      <div className="flex items-stretch">
        <div className="h-44 pl-12 pr-12 pt-12">
          <Input label="Song name" value={songName} onChange={onChangeName} />
        </div>
        <div className="h-44 pl-12 pr-12 pt-12">
          <Input
            label="Kit"
            value={selectedKit?.name || ""}
            onChange={onChangeName}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
