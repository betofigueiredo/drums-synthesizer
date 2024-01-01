import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useAppSelector } from "hooks/redux";
import handleLocalStorage from "utils/handleLocalStorage";

const SaveSong = () => {
  const { songId, songName, selectedKit, bpm, blocks, tracks } = useAppSelector(
    (state) => state.studio,
  );
  const [changes, setChanges] = useState<number>(0);
  const debouncedChanges = useDebounce(changes, 2000);

  useEffect(() => {
    setChanges((prev) => prev + 1);
  }, [songName, selectedKit, bpm, blocks, tracks]);

  useEffect(() => {
    const saveOnLocalStorage = () => {
      handleLocalStorage.setData("song", {
        songName,
        selectedKit,
        bpm,
        blocks,
        tracks,
      });
    };

    const saveOnApi = () => {
      // TODO:
      console.log("  Saved on API!");
    };

    const saveSong = () => {
      return songId ? saveOnApi() : saveOnLocalStorage();
    };

    if (debouncedChanges) {
      saveSong();
      setChanges(0);
    }
  }, [songId, debouncedChanges, songName, selectedKit, bpm, blocks, tracks]);

  return null;
};

export default SaveSong;
