import { useQuery } from "@tanstack/react-query";
import { SongsResponse } from "types/studio";
import makeRequest from "utils/makeRequest";

export const useGetSongs = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["songs"],
    queryFn: async () => {
      const response = await makeRequest.get<SongsResponse>("/api/v1/songs");
      return response?.data?.songs || [];
    },
  });
  return { isPending, isError, data, error };
};
