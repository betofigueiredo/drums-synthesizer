export type KitTrack = {
  id: string;
  type: string;
  name: string;
  audio: string;
};

export type Kit = {
  id: string;
  name: string;
  tracks: KitTrack[];
};

export type KitsState = {
  list: Kit[];
  loading?: boolean;
};
