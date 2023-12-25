import { useAppDispatch } from "./redux";
// import { useSnackbar } from "notistack";
// import makeRequest from "../utils/makeRequest";
import retrieveToken from "modules/shared/utils/retrieveToken";
import { setInfo } from "modules/shared/features/user/userSlice";

const useGetUserInfo = () => {
  // const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  // const onSuccess = (response: { data: User }) => {
  //   const userInfo = response.data;
  //   // setTimeout(() => dispatch(setInfo(userInfo)), 0);
  // };

  // const onError = () => {
  //   // enqueueSnackbar(t("alerts.error.general"), { variant: "error" });
  // };

  const requestUserInfo = () => {
    const userInfo = {
      id: "149df233-112f-4499-8b07-8b2dd96ef24c",
      name: "Beto",
      email: "beto@test.com",
    };
    setTimeout(() => dispatch(setInfo(userInfo)), 2000);
    // makeRequest.get("/api/v1/users/me").then(onSuccess).catch(onError);
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
