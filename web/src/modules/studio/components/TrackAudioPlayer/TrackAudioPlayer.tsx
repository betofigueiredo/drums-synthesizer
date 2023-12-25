import { useEffect, useState } from "react";
import { useAppSelector } from "modules/shared/hooks/redux";
import { Howl } from "howler";
import { ITrack } from "types/machine";

const TrackAudioPlayer = ({ track }: { track: ITrack }) => {
  const stepLocation = useAppSelector((state) => state.machine.stepLocation);
  const [audio, setAudio] = useState<Howl | null>(null);

  useEffect(() => {
    setAudio(
      new Howl({
        src: [track.audioFile],
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
