import { useEffect } from "react";
import { useAppDispatch } from "hooks/redux";
import { useSnackbar } from "notistack";
import { setInfo } from "features/user/userSlice";
import { useGetUser } from "api/userApi";
import errorHandler from "utils/errorHandler";
import retrieveToken from "utils/retrieveToken";

const GetUser = () => {
  const dispatch = useAppDispatch();
  const token = retrieveToken();
  const { enqueueSnackbar } = useSnackbar();
  const { data, isError, error } = useGetUser();

  useEffect(() => {
    const updateUserLoading = () => {
      const userInfo = { id: "", name: "", email: "" };
      dispatch(setInfo(userInfo));
    };

    if (!token) updateUserLoading();
  }, [token, dispatch]);

  useEffect(() => {
    if (data) {
      dispatch(setInfo(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (isError) {
      const errorMessage = errorHandler(error);
      enqueueSnackbar(errorMessage, { variant: "error" });
    }
  }, [isError, error, enqueueSnackbar]);

  return null;
};

export default GetUser;
