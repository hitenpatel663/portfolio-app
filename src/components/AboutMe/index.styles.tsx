import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12),
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
}));

export const BoxCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 1),
  position: "absolute",
  bottom: "-70%",
  right: "55%",
  boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.textColor.white,
}));

export const SmallTextHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  fontSize: theme.spacing(2),
  textAlign: "center",
}));

export const SmallTextHeighlight = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 600,
  fontSize: theme.spacing(2.5),
  textAlign: "center",
  display: "inline-block",
}));

export const SmallTextDesc = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.gray,
  fontWeight: 500,
  fontSize: theme.spacing(2),
  textAlign: "center",
  display: "inline-block",
}));

export const ImgBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  height: "500px",
  width: "330px",
  borderRadius: "230px",
  backgroundColor: theme.palette.secondary.main,
  position: "relative",
  // boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}));

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  width: "100%",
  textAlign: "left",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  fontSize: theme.spacing(3),
  textAlign: "left",
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.gray,
  fontWeight: 500,
  fontSize: theme.spacing(2),
  margin: theme.spacing(2, 0),
}));

export const LeftContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  width: "50%",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const RightContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  width: "50%",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
}));
