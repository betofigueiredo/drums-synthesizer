import { StudioState } from "types/studio";

const removeLastBlockUseCase = (state: StudioState) => {
  state.song.blocks = state.song.blocks - 1;
  // TODO: clear selected beats on last block
};

export default removeLastBlockUseCase;
