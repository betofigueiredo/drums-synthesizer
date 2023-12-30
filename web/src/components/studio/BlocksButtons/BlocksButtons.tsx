/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { addBlocks, removeLastBlock } from "features/studio/studioSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const BlocksButtons = () => {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.studio.tracks);
  const numberOfTracks = Object.keys(tracks).length;
  const TRACK_HEIGHT = 56;
  const buttonHeight = numberOfTracks * TRACK_HEIGHT;

  function addNewBlock() {
    dispatch(addBlocks({ blocks: 1 }));
  }

  function removeBlock() {
    dispatch(removeLastBlock());
  }

  return (
    <div
      className="absolute -right-56 top-0 -mr-2 mt-1 h-[var(--button-height)] w-56 rounded-md border border-gray-700 bg-background-main text-base"
      style={{ "--button-height": `${buttonHeight}px` }}
    >
      <button
        type="button"
        onClick={addNewBlock}
        className="h-[50%] w-56 border-b border-gray-700 text-gray-400 transition-colors hover:text-gray-100"
      >
        <FontAwesomeIcon icon={faCirclePlus} className="mb-1 text-2xl" />
        <p>Add new block</p>
      </button>
      <button
        type="button"
        onClick={removeBlock}
        className="h-[50%] w-56 text-gray-400 transition-colors hover:text-gray-100"
      >
        <FontAwesomeIcon icon={faCircleMinus} className="mb-1 text-2xl" />
        <p>Remove last block</p>
      </button>
    </div>
  );
};

export default BlocksButtons;
