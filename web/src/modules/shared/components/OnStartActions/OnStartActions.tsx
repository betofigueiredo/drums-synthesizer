import { useEffect } from "react";
import useGetUserInfo from "modules/shared/hooks/useGetUserInfo";
import useGetKits from "modules/shared/hooks/useGetKits";

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
