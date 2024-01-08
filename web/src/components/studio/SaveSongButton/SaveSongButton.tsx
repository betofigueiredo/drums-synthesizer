import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useSnackbar } from "notistack";
import { updateSongId } from "features/studio/studioSlice";
import { SongResponse } from "types/studio";
import checkUserIsLogged from "utils/checkUserIsLogged";
import makeRequest from "utils/makeRequest";
import Button from "components/ui/Button";

const SaveSongButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [isSaving, setIsSaving] = useState(false);
  const { songId, songName, selectedKit, bpm, blocks, tracks } = useAppSelector(
    (state) => state.studio,
  );
  const isUserLogged = checkUserIsLogged();

  const onSuccess = (response: SongResponse) => {
    const songId = response.data.song?.id || "";
    dispatch(updateSongId(songId));
    navigate(`/studio/${songId}`);
    setIsSaving(false);
  };

  const onError = () => {
    setIsSaving(false);
    enqueueSnackbar("Sorry, an error occurred. Try again.", {
      variant: "error",
    });
  };

  const saveToApi = () => {
    setIsSaving(true);
    makeRequest
      .post<SongResponse>("/api/v1/songs", {
        name: songName,
        bpm: bpm,
        blocks: blocks,
        tracks: tracks,
        kitId: selectedKit?.id,
      })
      .then(onSuccess)
      .catch(onError);
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  const onSave = () => {
    return isUserLogged ? saveToApi() : goToSignUp();
  };

  if (songId) {
    return null;
  }

  return (
    <Button onClick={onSave} loading={isSaving}>
      Save to my songs
    </Button>
  );
};

export default SaveSongButton;
