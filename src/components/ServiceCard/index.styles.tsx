import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Card = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width: "100%",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  background: theme.palette.textColor.white,
  borderRadius: "30px",
}));

export const IconBox = styled(Box)(({ theme, color }) => ({
  padding: theme.spacing(1),
  height: "60px",
  width: "60px",
  background: `${color}`,
  borderRadius: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  marginTop: theme.spacing(1.5),
  fontSize: theme.spacing(2),
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.secondary,
  fontWeight: 600,
  fontSize: theme.spacing(1.7),
  textAlign: "left",
  margin: theme.spacing(0.5, 0),
  opacity: '70%',
}));
