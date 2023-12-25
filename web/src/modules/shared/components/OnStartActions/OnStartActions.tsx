import { useEffect } from "react";
import useGetUserInfo from "modules/shared/hooks/useGetUserInfo";

const OnStartActions = () => {
  const { getUserInfo } = useGetUserInfo();

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return null;
};

export default OnStartActions;
