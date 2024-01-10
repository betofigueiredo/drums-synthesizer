import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { setNewSong, updateSong } from "features/studio/studioSlice";
import { Song, SongResponse } from "types/studio";
import makeRequest from "utils/makeRequest";
import handleLocalStorage from "utils/handleLocalStorage";
import Header from "components/studio/Header";
import Timeline from "components/studio/Timeline";
import ControlBar from "components/studio/ControlBar";
import Tracks from "components/studio/Tracks";
import AutoSaveSong from "components/studio/AutoSaveSong";

const Studio = () => {
  const { songId } = useParams();
  const dispatch = useAppDispatch();
  const kits = useAppSelector((state) => state.kits.list);

  useEffect(() => {
    function loadNewSong() {
      dispatch(setNewSong({ kit: kits[0] }));
    }

    function loadSavedSong(savedSong: Song) {
      dispatch(updateSong(savedSong));
    }

    function getDataFromLocalStorage() {
      const savedSong = handleLocalStorage.getData("song");
      const hasSongSaved = !!savedSong?.kit?.id;
      return hasSongSaved ? loadSavedSong(savedSong) : loadNewSong();
    }

    function onSuccess(response: SongResponse) {
      const data = response.data.song;
      const savedSong = {
        id: data.id,
        name: data.name,
        bpm: data.bpm,
        blocks: data.blocks,
        kit: data.kit,
        tracks: JSON.parse(String(data.tracks)),
      };
      loadSavedSong(savedSong);
    }

    function onError() {}

    function getSongFromApi() {
      makeRequest
        .get<SongResponse>(`/api/v1/songs/${songId}`)
        .then(onSuccess)
        .catch(onError);
    }

    function startStudio() {
      return songId ? getSongFromApi() : getDataFromLocalStorage();
    }

    // function shouldSaveCurrentSong() {
    //   if (userId && !songId && localStorage) {
    //     // save to database
    //   }
    // }

    startStudio();
  }, [songId, kits, dispatch]);

  return (
    <>
      <Header />
      <Timeline />
      <Tracks />
      <ControlBar />
      <AutoSaveSong />
    </>
  );
};

export default Studio;
