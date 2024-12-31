import { Box, Button, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  textAlign: "left",
  padding: theme.spacing(11, 1, 0, 7),
}));

export const Grid2Wrapper = styled(Grid2)(({ theme }) => ({
  height: '100vh',
  padding: theme.spacing(5),
}));

export const Grid2Container = styled(Grid2)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
}));

export const HeroHello = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 600,
  fontSize: theme.spacing(2.5),
}));

export const MeName = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  fontSize: theme.spacing(8),
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.secondary,
  fontWeight: 600,
  fontSize: theme.spacing(2),
  margin: theme.spacing(2.5,0)
}));

export const SeeMyWork = styled(Button)(({ theme }) => ({
  color: theme.palette.textColor.white,
  fontWeight: 600,
  fontSize: theme.spacing(2),
  padding: theme.spacing(1, 2),
  background: theme.palette.tertiary.main,
  borderRadius: "100px",
  display: 'flex',
  gap: theme.spacing(1.5),
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.07)",
    boxShadow: theme.shadows[3],
    color: theme.palette.primary.main,
  },
}));
