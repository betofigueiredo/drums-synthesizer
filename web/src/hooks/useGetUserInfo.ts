import { useAppDispatch } from "./redux";
import { useSnackbar } from "notistack";
import { AxiosError } from "axios";
import { UserResponse } from "types/user";
import { setInfo } from "features/user/userSlice";
import makeRequest from "utils/makeRequest";
import retrieveToken from "utils/retrieveToken";
import errorHandler from "utils/errorHandler";

const useGetUserInfo = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  const onSuccess = (response: UserResponse) => {
    const userInfo = response.data.user;
    dispatch(setInfo(userInfo));
    // setTimeout(() => dispatch(setInfo(userInfo)), 0);
  };

  const onError = (error: AxiosError) => {
    const errorMessage = errorHandler(error);
    enqueueSnackbar(errorMessage, { variant: "error" });
  };

  const requestUserInfo = () => {
    makeRequest
      .get<UserResponse>("/api/v1/users/me")
      .then(onSuccess)
      .catch(onError);
  };

  const updateUserLoading = () => {
    const userInfo = { id: "", name: "", email: "" };
    dispatch(setInfo(userInfo));
  };

  const getUserInfo = () => {
    const token = retrieveToken();
    return token ? requestUserInfo() : updateUserLoading();
  };

  return { getUserInfo };
};

export default useGetUserInfo;
