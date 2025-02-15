import { Box, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 12),
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.secondary.dark,
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
  textAlign: "center",
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.6),
}));

export const SocialMediaLinksWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.secondary.dark,
  gap: theme.spacing(1.8),
  color: theme.palette.textColor.white,
}));
