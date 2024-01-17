const retrieveToken = (): string => {
  const authObject = localStorage.getItem("auth") || "{}";
  const auth = JSON.parse(authObject);
  return auth?.token || "";
};

export default retrieveToken;
