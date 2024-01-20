import { useQuery } from "@tanstack/react-query";
import { UserResponse } from "types/user";
import retrieveToken from "utils/retrieveToken";
import makeRequest from "utils/makeRequest";

export const useGetUser = () => {
  const token = retrieveToken();
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await makeRequest.get<UserResponse>("/api/v1/users/me");
      return response.data.user;
    },
    enabled: !!token,
  });
  return { isPending, isError, data, error, refetch };
};
