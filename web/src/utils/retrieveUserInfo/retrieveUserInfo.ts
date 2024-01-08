import { User } from "types/user";

const retrieveUserInfo = (): User => {
  const authObject = localStorage.getItem("auth") || "{}";
  const auth = JSON.parse(authObject);
  const user = auth?.user || {};
  return user;
};

export default retrieveUserInfo;
