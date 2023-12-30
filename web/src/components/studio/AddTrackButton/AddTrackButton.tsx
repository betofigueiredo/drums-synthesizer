/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { addTrack } from "features/studio/studioSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

const AddTrackButton = () => {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.studio.tracks);
  const numberOfTracks = Object.keys(tracks).length;

  function addNewTrack() {
    dispatch(addTrack({ trackType: "tom" }));
  }

  const buttonHeight = numberOfTracks * 56;

  return (
    <button
      type="button"
      onClick={addNewTrack}
      className="absolute ml-2 mt-1 h-[var(--button-height)] w-44 rounded-md border border-gray-700 bg-background-main"
      style={{ "--button-height": `${buttonHeight}px` }}
    >
      Add new track
      {numberOfTracks}
    </button>
  );
};

export default AddTrackButton;
