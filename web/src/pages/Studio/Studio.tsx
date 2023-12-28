import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import Layout from "components/shared/Layout";
import Header from "components/studio/Header";
import Timeline from "components/studio/Timeline";
import ControlBar from "components/studio/ControlBar";
import Tracks from "components/studio/Tracks";
import { setNewSong } from "features/studio/studioSlice";

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
    function getDataFromLocalStorage() {
      dispatch(setNewSong({ selectedKit: kits[0] }));
    }

    function getSong() {
      // TODO:
    }

    function startStudio() {
      return songId ? getSong() : getDataFromLocalStorage();
    }

    function checkLoading() {
      if (kits.length) startStudio();
    }

    checkLoading();
  }, [songId, kits, dispatch]);

  return (
    <Layout>
      <Header />
      <Timeline />
      <Tracks />
      <ControlBar />
    </Layout>
  );
};

export default Studio;
