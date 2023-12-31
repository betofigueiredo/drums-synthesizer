import { User } from "types/user";

const setUserInfo = ({ token, user }: { token: string; user: User }): void => {
  const auth = { token, user };
  localStorage.setItem("auth", JSON.stringify(auth));
};

const clearUserInfo = (): void => {
  localStorage.setItem("auth", JSON.stringify({}));
};

const setData = (key: string, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getData = (key: string) => {
  const data = localStorage.getItem(key) || "{}";
  return JSON.parse(String(data));
};

const handleLocalStorage = {
  setUserInfo,
  clearUserInfo,
  setData,
  getData,
};

export default handleLocalStorage;
