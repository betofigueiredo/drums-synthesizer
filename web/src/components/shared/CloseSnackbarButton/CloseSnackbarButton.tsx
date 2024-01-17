import { closeSnackbar } from "notistack";
import { Button } from "components/ui/button";

const CloseSnackbarButton = ({
  snackbarId,
}: {
  snackbarId: string | number;
}) => {
  return (
    <Button variant="ghost" onClick={() => closeSnackbar(snackbarId)}>
      Dismiss
    </Button>
  );
};

export default CloseSnackbarButton;
