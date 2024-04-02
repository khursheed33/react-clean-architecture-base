import React from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

interface AppPopupProps {
  open: boolean;
  title: string;
  subtitle?: string;
  confirmBtnTitle?: string;
  icon?: JSX.Element;
  isError?: boolean;
  needCancel?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const AppPopup: React.FC<AppPopupProps> = ({
  open,
  title,
  subtitle,
  confirmBtnTitle = 'Okay',
  icon = <FontAwesomeIcon icon={faExclamationTriangle} size="3x" />,
  isError = false,
  needCancel = true,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div style={{ padding: '20px' }}>
        {needCancel && (
          <IconButton
            aria-label="close"
            style={{ position: 'absolute', top: '10px', right: '10px' }}
            onClick={onClose}
          >
            <FontAwesomeIcon
              icon="times"
              color={isError ? 'red' : 'rgba(0,0,0,0.6)'}
            />
          </IconButton>
        )}
        <div
          style={{
            padding: '20px',
            backgroundColor: isError ? 'rgba(255,0,0,0.1)' : '#f0f0f0',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icon}
        </div>
        <Typography
          variant="h5"
          align="center"
          style={{
            fontWeight: 'bold',
            color: isError ? 'red' : undefined,
            margin: '10px 0',
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body1"
            align="center"
            style={{ color: 'rgba(0,0,0,0.6)', margin: '5px 0' }}
          >
            {subtitle}
          </Typography>
        )}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {needCancel && (
            <Button
              variant="outlined"
              onClick={onClose}
              style={{
                color: isError ? 'red' : undefined,
                borderColor: isError ? 'red' : undefined,
                marginRight: '10px',
              }}
            >
              Maybe Later
            </Button>
          )}
          <Button
            variant="contained"
            onClick={onConfirm}
            style={{
              backgroundColor: isError ? 'red' : undefined,
              color: 'white',
            }}
          >
            {confirmBtnTitle}
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default AppPopup;
