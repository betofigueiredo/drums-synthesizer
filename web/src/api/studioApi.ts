import { useQuery } from "@tanstack/react-query";
import { SongResponse } from "types/studio";
import makeRequest from "utils/makeRequest";

export const useGetSong = ({ songId }: { songId: string | undefined }) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["song", songId],
    queryFn: async () => {
      const response = await makeRequest.get<SongResponse>(
        `/api/v1/songs/${songId}`,
      );
      return response?.data?.song;
    },
    enabled: !!songId,
  });
  return { isPending, isError, data, error };
};
