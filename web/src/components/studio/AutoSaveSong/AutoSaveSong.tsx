import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useAppSelector } from "hooks/redux";
import handleLocalStorage from "utils/handleLocalStorage";

const AutoSaveSong = () => {
  const { id, name, kit, bpm, blocks, tracks } = useAppSelector(
    (state) => state.studio.song,
  );
  const [changes, setChanges] = useState<number>(0);
  const debouncedChanges = useDebounce(changes, 2000);

  useEffect(() => {
    setChanges((prev) => prev + 1);
  }, [name, kit, bpm, blocks, tracks]);

  useEffect(() => {
    const saveOnLocalStorage = () => {
      const song = { name, kit, bpm, blocks, tracks };
      handleLocalStorage.setData("song", song);
      console.log("  Saved on localStorage!");
    };

    const saveOnApi = () => {
      // TODO:
      console.log("  Saved on API!");
    };

    const saveSong = () => {
      return id ? saveOnApi() : saveOnLocalStorage();
    };

    if (debouncedChanges) {
      saveSong();
      setChanges(0);
    }
  }, [id, debouncedChanges, name, kit, bpm, blocks, tracks]);

  return null;
};

export default AutoSaveSong;
