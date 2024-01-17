import { useQuery } from "@tanstack/react-query";
import { UserResponse } from "types/user";
import makeRequest from "utils/makeRequest";

export const useGetUser = ({ token }: { token: string | undefined }) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await makeRequest.get<UserResponse>("/api/v1/users/me");
      return response.data.user;
    },
    enabled: !!token,
  });
  return { isPending, isError, data, error };
};
