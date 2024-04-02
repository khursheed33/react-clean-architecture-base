import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface AppCircularProgressProps {
  size?: number;
  color?: string;
  needElevation?: boolean;
}

const AppCircularProgress: React.FC<AppCircularProgressProps> = ({
  size = 50,
  color,
  needElevation = false,
}) => {
  return (
    <div
      style={{
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: size,
        width: size,
        borderRadius: '50%',
        backgroundColor: needElevation ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
        boxShadow: needElevation ? '2px 2px 3px rgba(0, 0, 0, 0.3)' : 'none',
      }}
    >
      <CircularProgress
        size={size}
        style={{ color: color || undefined }}
      />
    </div>
  );
};

export default AppCircularProgress;
