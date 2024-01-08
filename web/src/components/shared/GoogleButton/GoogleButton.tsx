import { useEffect } from "react";

declare global {
  interface Window {
    handleGoogleCredentialResponse: unknown;
  }
}

const GoogleButton = ({
  onSubmit,
}: {
  onSubmit: (googleToken: string) => void;
}) => {
  const GOOGLE_AUTH_CLIENT_ID = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;

  window.handleGoogleCredentialResponse = (response: {
    clientId: string;
    credential: string;
  }) => {
    const googleToken = response?.credential;
    onSubmit(googleToken);
  };

  useEffect(() => {
    function createScript() {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      document.body.appendChild(script);
    }

    createScript();
  }, []);

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id={GOOGLE_AUTH_CLIENT_ID}
        data-context="signup"
        data-ux_mode="popup"
        data-callback="handleGoogleCredentialResponse"
        data-auto_prompt="false"
      />
      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signup_with"
        data-size="large"
        data-logo_alignment="left"
      />
    </>
  );
};

export default GoogleButton;
