import React from "react";
import ReactDOM from "react-dom/client";
import "@tanstack/react-query";
import { AxiosError } from "axios";
import { Provider } from "react-redux";
import { store } from "./store";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AllRoutes from "./routes";
import OnStartActions from "components/shared/OnStartActions";
import CloseSnackbarButton from "components/shared/CloseSnackbarButton";
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./styles/index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: 1,
      retry: 1,
    },
  },
});

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        action={(snackbarId) => <CloseSnackbarButton snackbarId={snackbarId} />}
      >
        <QueryClientProvider client={queryClient}>
          <OnStartActions />
          <AllRoutes />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
);
