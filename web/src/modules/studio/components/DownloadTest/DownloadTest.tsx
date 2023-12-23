import Crunker from "crunker";

const DownloadTest = () => {
  const mergeOneLine = async (
    crunker: Crunker,
    buffer: AudioBuffer,
    times: number[],
  ) => {
    const audios = times.map((t) => crunker.padAudio(buffer, 0, t));
    return crunker.mergeAudio(audios);
  };

  const beatBuilder = async (
    crunker: Crunker,
    beatConf: {
      delayStart: number;
      timing: number;
      beats: number;
      repeats?: number;
    },
    buffers: AudioBuffer[],
    beatTiming: number[][],
  ) => {
    const beatLines = await Promise.all(
      buffers.map((_, i) => {
        return mergeOneLine(
          crunker,
          buffers[i],
          beatTiming[i].map((bt) => bt * beatConf.timing),
        );
      }),
    );
    const beat = await crunker.mergeAudio(beatLines);
    const beatTimingBaseArray = Array.from(Array(beatConf.repeats || 1).keys());
    const beatTiming2 = beatTimingBaseArray.map(
      (e) => beatConf.delayStart + e * beatConf.beats * beatConf.timing,
    );
    return await mergeOneLine(crunker, beat, beatTiming2);
  };

  const run = async () => {
    const crunker = new Crunker({ sampleRate: 96000 });
    const [kick] = await crunker.fetchAudio("/audio/acoustic-kick-03.wav");
    const [snare] = await crunker.fetchAudio("/audio/acoustic-snare-06.wav");

    const beat = await beatBuilder(
      crunker,
      { delayStart: 1, timing: 1, beats: 4 },
      [kick, snare],
      [
        [0, 0.309, 0.618, 1.03],
        [0.412, 1.236],
      ],
    );

    const merged = await crunker.mergeAudio([beat]);
    // crunker.play(merged);
    const output = await crunker.export(merged, "audio/ogg");
    crunker.download(output.blob, "merged");
  };

  return (
    <div className="flex items-center">
      <button onClick={run}>download test</button>
    </div>
  );
};

export default DownloadTest;
