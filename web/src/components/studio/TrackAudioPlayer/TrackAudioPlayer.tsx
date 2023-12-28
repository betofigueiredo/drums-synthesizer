import { useEffect, useState } from "react";
import { useAppSelector } from "hooks/redux";
import { Howl } from "howler";
import { ITrack } from "types/studio";

const TrackAudioPlayer = ({ track }: { track: ITrack }) => {
  const stepLocation = useAppSelector((state) => state.studio.stepLocation);
  const [audio, setAudio] = useState<Howl | null>(null);

  useEffect(() => {
    setAudio(
      new Howl({
        src: [track.audio],
        volume: track.volume,
      }),
    );
  }, [track]);

  useEffect(() => {
    if (track.steps[stepLocation] && !track.muted) {
      audio?.play();
    }
  }, [track.steps, stepLocation, track.muted, audio]);

  return null;
};

export default TrackAudioPlayer;
