import { useEffect, useState } from "react";
import { useAppSelector } from "hooks/redux";
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
      })
    );
  }, [track]);

  if (track.steps[stepLocation]) {
    audio?.play();
  }

  return null;
};

export default TrackAudioPlayer;
