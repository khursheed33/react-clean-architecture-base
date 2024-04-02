import React from 'react';
import Typography from '@mui/material/Typography';

interface AppTitleProps {
  title: string;
  color?: string;
  maxLines?: number;
  fontSize?: number;
  fontFamily?: string;
  textAlign?: 'left' | 'center' | 'right';
  letterSpacing?: number;
  fontWeight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 'inherit';
  overflow?: 'clip' | 'ellipsis' | 'visible';
}

const AppTitle: React.FC<AppTitleProps> = ({
  title,
  color,
  fontSize,
  maxLines,
  overflow,
  textAlign,
  fontFamily,
  fontWeight,
  letterSpacing,
}) => {
  return (
    <Typography
      variant="h6"
      style={{
        color: color ?? 'rgba(0, 0, 0, 0.6)', // Default color
        fontFamily: fontFamily ?? 'Sarabun', // Default font family
        fontWeight: fontWeight ?? 'normal', // Default font weight
        fontSize: fontSize ?? 20, // Default font size
        letterSpacing: letterSpacing,
        overflow: overflow ?? 'ellipsis', // Default overflow behavior
        textAlign: textAlign,
        textOverflow: overflow,
      }}
    >
      {title}
    </Typography>
  );
};

export default AppTitle;
