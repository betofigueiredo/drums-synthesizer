import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useAppSelector } from "hooks/redux";
import handleLocalStorage from "utils/handleLocalStorage";
import makeRequest from "utils/makeRequest";
import { SongResponse } from "types/studio";

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

    const onSuccess = (response: SongResponse) => {
      // const songId = response.data.song?.id || "";
      // dispatch(updateSong({ id: songId }));
      // navigate(`/studio/${songId}`);
      // setIsSaving(false);
    };

    const onError = () => {
      // setIsSaving(false);
      // enqueueSnackbar("Sorry, an error occurred. Try again.", {
      //   variant: "error",
      // });
    };

    const saveOnApi = () => {
      const song = {
        name,
        bpm,
        blocks,
        tracks: JSON.stringify(tracks),
        kitId: kit?.id,
      };
      makeRequest
        .put<SongResponse>(`/api/v1/songs/${id}`, song)
        .then(onSuccess)
        .catch(onError);
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
