import { ITrack } from "types/machine";
import TrackAudioPlayer from "components/TrackAudioPlayer";

const TrackControls = ({ track }: { track: ITrack }) => {
  return (
    <>
      <div className="grid h-16 grid-cols-12 items-center gap-4">
        <div className="col-span-2">
          <button
            type="button"
            className="m-0.5 h-6 w-6 rounded-sm border border-solid border-black bg-[#2F3340] text-xs text-gray-100 shadow-[inset_0_1px_1px_0_rgb(255,255,255,7%)] hover:bg-gray-700"
          >
            M
          </button>
        </div>
        <div className="col-span-8">
          <p className="text-base font-semibold uppercase leading-6 text-gray-300">
            {track.type}
          </p>
        </div>
        <div className="col-span-2">
          {track.muted ? (
            <div className="m-0.5 h-2 w-2 rounded-full bg-black" />
          ) : (
            <div className="m-0.5 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_6px_2px_rgb(34,211,238,40%)]" />
          )}
        </div>
      </div>
      <TrackAudioPlayer track={track} />
    </>
  );
};

export default TrackControls;
