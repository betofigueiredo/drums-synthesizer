import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useSnackbar } from "notistack";
import { updateSong } from "features/studio/studioSlice";
import { SongResponse } from "types/studio";
import checkUserIsLogged from "utils/checkUserIsLogged";
import makeRequest from "utils/makeRequest";
import { Button } from "components/ui/button";
import { Loader2 } from "lucide-react";
// import Button from "components/ui2/Button";

const SaveSongButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [isSaving, setIsSaving] = useState(false);
  const { id, name, kit, bpm, blocks, tracks } = useAppSelector(
    (state) => state.studio.song,
  );
  const isUserLogged = checkUserIsLogged();

  const onSuccess = (response: SongResponse) => {
    const songId = response.data.song?.id || "";
    dispatch(updateSong({ id: songId }));
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
    const song = {
      name,
      bpm,
      blocks,
      tracks: JSON.stringify(tracks),
      kitId: kit?.id,
    };
    makeRequest
      .post<SongResponse>("/api/v1/songs", song)
      .then(onSuccess)
      .catch(onError);
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  const onSave = () => {
    return isUserLogged ? saveToApi() : goToSignUp();
  };

  if (id) {
    return null;
  }

  return isSaving ? (
    <Button>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Saving
    </Button>
  ) : (
    <Button onClick={onSave}>Save to my songs</Button>
  );
};

export default SaveSongButton;
