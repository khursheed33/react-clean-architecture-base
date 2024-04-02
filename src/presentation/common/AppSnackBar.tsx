import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface AppSnackBarProps {
  open: boolean;
  onClose: (event?: React.SyntheticEvent, reason?: string) => void;
  message: string;
  severity: AlertProps['severity'];
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AppSnackBar: React.FC<AppSnackBarProps> = ({
  open,
  onClose,
  message,
  severity,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={6000}>
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackBar;
