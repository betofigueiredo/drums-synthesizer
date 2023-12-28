import { useAppDispatch } from "./redux";
import { useSnackbar } from "notistack";
import { Kit, setKits } from "modules/kits/features/kits/kitsSlice";
import makeRequest from "../utils/makeRequest";

type KitsResponse = { data: { kits: Kit[] } };

const useGetKits = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  const onSuccess = (response: KitsResponse) => {
    const kits = response?.data?.kits || [];
    dispatch(setKits(kits));
  };

  const onError = () => {
    enqueueSnackbar("Sorry, an error occurred. Try again.", {
      variant: "error",
    });
  };

  const getKits = () => {
    makeRequest
      .get<KitsResponse>("/api/v1/kits")
      .then(onSuccess)
      .catch(onError);
  };

  return { getKits };
};

export default useGetKits;
