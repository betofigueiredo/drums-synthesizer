import { User } from "types/user";

const setUserInfo = ({ token, user }: { token: string; user: User }): void => {
  const auth = { token, user };
  localStorage.setItem("auth", JSON.stringify(auth));
};

const clearUserInfo = (): void => {
  localStorage.setItem("auth", JSON.stringify({}));
};

const handleLocalStorage = {
  setUserInfo,
  clearUserInfo,
};

export default handleLocalStorage;
