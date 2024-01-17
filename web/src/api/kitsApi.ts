import { Kit } from "types/kits";
import { useQuery } from "@tanstack/react-query";
import makeRequest from "utils/makeRequest";

type KitsResponse = { data: { kits: Kit[] } };

export const useGetKits = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["kits"],
    queryFn: async () => {
      const response = await makeRequest.get<KitsResponse>("/api/v1/kits");
      return response?.data?.kits || [];
    },
  });
  return { isPending, isError, data, error };
};
