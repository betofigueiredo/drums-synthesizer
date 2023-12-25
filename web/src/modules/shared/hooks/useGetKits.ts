import { useAppDispatch } from "./redux";
// import { useSnackbar } from "notistack";
// import makeRequest from "../utils/makeRequest";
import { setInfo } from "modules/shared/features/user/userSlice";

const useGetKits = () => {
  // const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  // const onSuccess = (response: { data: User }) => {
  //   const userInfo = response.data;
  //   // setTimeout(() => dispatch(setInfo(userInfo)), 0);
  // };

  // const onError = () => {
  //   // enqueueSnackbar(t("alerts.error.general"), { variant: "error" });
  // };

  const getKits = () => {
    const kits = [
      {
        id: "83174715-8da1-4269-abc3-dab0e4656e24",
        name: "Basic Kit",
        tracks: [
          {
            id: "29d41dc9-c89c-4187-99eb-746a2fda4faf",
            name: "Snare",
            audio: "/audio/file.mp3",
          },
        ],
      },
    ];
    // dispatch(setInfo(kits));
  };

  return { getKits };
};

export default useGetKits;
