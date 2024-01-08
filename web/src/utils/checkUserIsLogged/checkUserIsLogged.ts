import retrieveUserInfo from "utils/retrieveUserInfo";

const checkUserIsLogged = (): boolean => {
  const user = retrieveUserInfo();
  return !!user.email;
};

export default checkUserIsLogged;
