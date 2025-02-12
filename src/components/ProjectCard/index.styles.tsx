import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Card = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  width: "100%",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  background: theme.palette.textColor.white,
  borderRadius: "30px",
}));

export const ImageContainer = styled("img")(({ theme }) => ({
  width: "100%",
  height: "300px",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  background: theme.palette.textColor.white,
  borderRadius: '10px',
}));

export const BottomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  width: "100%",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  background: theme.palette.textColor.white,
  borderRadius: "30px",
}));

export const IconBox = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  height: "50px",
  width: "50px",
  minWidth: "50px",
  background: `${theme.palette.secondary.dark}`,
  borderRadius: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
  opacity: "70%",
  width: "80%",
}));

export const ProjectDetail = styled(Box)(({ theme, color }) => ({
  display: "flex",
  alignItems: "left",
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const ChipBox = styled(Box)(({ theme, color }) => ({
  display: "flex",
  alignItems: "left",
  width: "100%",
  flexDirection: "row",
  flexFlow: 'wrap',
  gap: theme.spacing(2),
}));
