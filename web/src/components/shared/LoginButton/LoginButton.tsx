import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { AxiosError } from "axios";
import errorsMessages from "constants/errorsMessages";
import makeRequest from "utils/makeRequest";
import handleLocalStorage from "utils/handleLocalStorage";
import useGetUserInfo from "hooks/useGetUserInfo";
import GoogleButton from "components/shared/GoogleButton";
import { User, LoginResponse } from "types/user";

const LoginButton = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { getUserInfo } = useGetUserInfo();

  function goToDashboard() {
    getUserInfo();
    const urlToRedirect = type === "signin" ? "/songs" : "/studio";
    navigate(urlToRedirect);
  }

  function saveUserToLocalstorage(token: string, user: User) {
    handleLocalStorage.setUserInfo({ token, user });
    goToDashboard();
  }

  function onError(error: AxiosError) {
    const errorCode = (error?.response?.data as { code: string })?.code || "";
    const errorMessage =
      errorsMessages[errorCode] || "Sorry, an error occurred. Try again.";
    handleLocalStorage.clearUserInfo();
    enqueueSnackbar(errorMessage, { variant: "error" });
  }

  function onSuccess(response: LoginResponse) {
    const token = response?.data?.accessToken || "";
    const user = response?.data?.user || {};
    const isValidData = token !== "" && user.email !== undefined;
    return isValidData
      ? saveUserToLocalstorage(token, user)
      : onError({} as AxiosError);
  }

  function onSubmit(token: string) {
    makeRequest
      .post<LoginResponse>(`/api/v1/users/${type}`, { googleToken: token })
      .then(onSuccess)
      .catch(onError);
  }

  return <GoogleButton onSubmit={onSubmit} />;
};

export default LoginButton;
