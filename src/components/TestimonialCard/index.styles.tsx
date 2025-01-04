import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Card = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width: "100%",
  maxWidth: '360px',
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.textColor.white,
  borderRadius: "40px",
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  fontSize: theme.spacing(2.5),
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.gray,
  fontWeight: 600,
  marginTop: theme.spacing(1),
  fontSize: theme.spacing(1.5),
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.secondary,
  fontWeight: 600,
  fontSize: theme.spacing(1.7),
  textAlign: "center",
  margin: theme.spacing(0.5, 0),
  opacity: "70%",
}));

export const DividerComp = styled(Divider)(({ theme }) => ({
  color: theme.palette.textColor.gray,
  margin: theme.spacing(1, 0),
  width: "100%",
}));
