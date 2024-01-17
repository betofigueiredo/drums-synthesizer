import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { setNewSong, updateSong } from "features/studio/studioSlice";
import { Song } from "types/studio";
import { useGetSong } from "api/studioApi";
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
  const { data, isPending } = useGetSong({ songId });

  useEffect(() => {
    function loadSavedSong(data: Song) {
      const savedSong = {
        id: data.id,
        name: data.name,
        bpm: data.bpm,
        blocks: data.blocks,
        kit: data.kit,
        tracks: data.tracks,
      };
      dispatch(updateSong(savedSong));
    }

    function checkSongData() {
      if (data) loadSavedSong(data);
    }

    checkSongData();
  }, [data, dispatch]);

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

    function checkSongId() {
      if (!songId) getDataFromLocalStorage();
    }

    checkSongId();
  }, [songId, kits, dispatch]);

  if (songId && isPending) {
    return <p>Loading...</p>;
  }

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
