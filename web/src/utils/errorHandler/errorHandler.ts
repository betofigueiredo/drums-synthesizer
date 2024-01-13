import { AxiosError } from "axios";
import errorsMessages from "constants/errorsMessages";

const errorHandler = (error: AxiosError) => {
  const errorCode = (error?.response?.data as { code: string })?.code || "";
  const errorMessage =
    errorsMessages[errorCode] || "Sorry, an error occurred. Try again.";
  return errorMessage;
};

export default errorHandler;
