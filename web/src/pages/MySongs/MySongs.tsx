import { useGetSongs } from "api/songsApi";
import PageHeader from "components/shared/PageHeader";
import SongRow from "components/songs/SongRow";

const MySongs = () => {
  const { data } = useGetSongs();

  // if (isPending) {
  //   return <>loading...</>
  // }

  return (
    <div className="text-center">
      <div className="container m-auto text-left">
        <PageHeader title="My songs" />
        <div>{data?.map((song) => <SongRow key={song.id} song={song} />)}</div>
      </div>
    </div>
  );
};

export default MySongs;
