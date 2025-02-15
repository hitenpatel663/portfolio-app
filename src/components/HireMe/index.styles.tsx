import { Box, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  height: "300px",
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.primary.light,
  position: "relative",
}));

export const ImageContainerWrapper = styled(Box)(({ theme }) => ({
  height: "300px",
  width: "100%",
  background: theme.palette.secondary.main,
  position: "relative",
}));

export const OverLay = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "300px",
  top: 0,
  background: "rgba(15,23,42,.7)",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.white,
  fontWeight: 600,
  fontSize: theme.spacing(3),
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.white,
  fontWeight: 400,
  fontSize: theme.spacing(2),
  width: "50%",
  textAlign: "center",
  margin: theme.spacing(2.5, 0),
}));

export const ImageContainer = styled("img")(({ theme }) => ({
  width: "600px",
  opacity: "30%",
  position: "absolute",
  height: "400px",
  top: -60,
}));
