import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { setNewSong, setSavedSong } from "features/studio/studioSlice";
import { StudioTrack } from "types/studio";
import { Kit } from "types/kits";
import handleLocalStorage from "utils/handleLocalStorage";
import Header from "components/studio/Header";
import Timeline from "components/studio/Timeline";
import ControlBar from "components/studio/ControlBar";
import Tracks from "components/studio/Tracks";
import SaveSong from "components/studio/SaveSong";

const Studio = () => {
  const { songId } = useParams();
  const dispatch = useAppDispatch();
  const kits = useAppSelector((state) => state.kits.list);

  // const song = {
  //   id: "eeb163c4-0178-4a99-8e61-d6b6fcbae9c0",
  //   name: "My First Song",
  //   bpm: 140,
  //   blocks: 4,
  //   kit: {
  //     id: "83174715-8da1-4269-abc3-dab0e4656e24",
  //     name: "Basic Kit",
  //     tracks: [
  //       {
  //         id: "29d41dc9-c89c-4187-99eb-746a2fda4faf",
  //         name: "Snare",
  //         audio: "/audio/file.mp3",
  //       },
  //     ],
  //   },
  //   tracks: [
  //     {
  //       id: "29d41dc9-c89c-4187-99eb-746a2fda4faf",
  //       volume: 1,
  //       muted: false,
  //       steps: [1, 4, 7, 11],
  //       // steps: { 1: true, 4: true, 7: true, 11: true },
  //     },
  //   ],
  // };

  useEffect(() => {
    function loadNewSong() {
      dispatch(setNewSong({ selectedKit: kits[0] }));
    }

    function loadSavedSong(savedSong: {
      songName: string;
      blocks: number;
      bpm: number;
      selectedKit: Kit;
      tracks: { [k: string]: StudioTrack };
    }) {
      dispatch(setSavedSong(savedSong));
    }

    function getDataFromLocalStorage() {
      const savedSong = handleLocalStorage.getData("song");
      const hasSongSaved = !!savedSong?.selectedKit?.id;
      return hasSongSaved ? loadSavedSong(savedSong) : loadNewSong();
    }

    function getSongFromApi() {
      // TODO:
    }

    function startStudio() {
      return songId ? getSongFromApi() : getDataFromLocalStorage();
    }

    function checkLoading() {
      if (kits.length) startStudio();
    }

    checkLoading();
  }, [songId, kits, dispatch]);

  return (
    <>
      <Header />
      <Timeline />
      <Tracks />
      <ControlBar />
      <SaveSong />
    </>
  );
};

export default Studio;
