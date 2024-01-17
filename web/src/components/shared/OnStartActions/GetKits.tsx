import { useEffect } from "react";
import { useAppDispatch } from "hooks/redux";
import { useSnackbar } from "notistack";
import { setKits } from "features/kits/kitsSlice";
import { useGetKits } from "api/kitsApi";

const GetKits = () => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { data, isError } = useGetKits();

  useEffect(() => {
    if (data) {
      dispatch(setKits(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (isError) {
      enqueueSnackbar("Sorry, an error occurred. Try again.", {
        variant: "error",
      });
    }
  }, [isError, enqueueSnackbar]);

  return null;
};

export default GetKits;
