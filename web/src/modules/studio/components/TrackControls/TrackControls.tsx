import Draggable from "react-draggable";
import { useRef } from "react";
import { useAppDispatch } from "modules/shared/hooks/redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { ITrack } from "types/machine";
import { muteTrack } from "modules/studio/features/machine/machineSlice";
import TrackAudioPlayer from "modules/studio/components/TrackAudioPlayer";

const TrackControls = ({ track }: { track: ITrack }) => {
  const dispatch = useAppDispatch();
  const nodeRef = useRef(null);

  function muteHandler() {
    dispatch(muteTrack({ trackType: track.type }));
  }

  const muteBtnClassName = track.muted
    ? "m-0.5 h-6 w-6 rounded-sm border border-solid border-slate-900 bg-lime-400 text-xs text-gray-900"
    : "m-0.5 h-6 w-6 rounded-sm border border-solid border-slate-900 bg-[#373952] text-xs text-gray-100 shadow-[inset_0_1px_1px_0_rgb(255,255,255,7%)] hover:bg-slate-700";

  const trackNameClassName = track.muted
    ? "text-gray-300 text-base font-semibold leading-6 opacity-50"
    : "text-gray-300 text-base font-semibold leading-6";

  return (
    <Draggable
      nodeRef={nodeRef}
      axis="y"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      // position={null}
      // grid={[56, 56]}
      scale={1}
      // onStart={this.handleStart}
      // onDrag={this.handleDrag}
      // onStop={this.handleStop}
    >
      <div className="relative pb-1 pt-1">
        <div className="grid h-12 grid-cols-12 items-center">
          <div ref={nodeRef} className="handle">
            <FontAwesomeIcon icon={faGripLines} />
          </div>
          <div className="col-span-2">
            <button
              type="button"
              className={muteBtnClassName}
              onClick={muteHandler}
            >
              <span className="drop-shadow-[0_1px_2px_rgb(0,0,0,0.8)]">M</span>
            </button>
          </div>
          <div className="col-span-8">
            <p className={trackNameClassName}>{track.name}</p>
          </div>
          <div className="col-span-2">
            {/* {track.muted ? (
            <div className="bg-black m-0.5 h-2 w-2 rounded-full" />
          ) : (
            <div className="bg-cyan-400 m-0.5 h-2 w-2 rounded-full shadow-[0_0_6px_2px_rgb(34,211,238,40%)]" />
          )} */}
          </div>
        </div>
        <TrackAudioPlayer track={track} />
      </div>
    </Draggable>
  );
};

export default TrackControls;
