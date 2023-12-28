import { useEffect } from "react";
import useGetUserInfo from "hooks/useGetUserInfo";
import useGetKits from "hooks/useGetKits";

const OnStartActions = () => {
  const { getUserInfo } = useGetUserInfo();
  const { getKits } = useGetKits();

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  useEffect(() => {
    getKits();
  }, [getKits]);

  return null;
};

export default OnStartActions;
