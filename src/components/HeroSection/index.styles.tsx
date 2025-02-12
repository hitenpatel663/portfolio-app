import { Box, Button, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  textAlign: "left",
  padding: theme.spacing(20, 0, 0, 12),
}));

export const Grid2Wrapper = styled(Grid2)(({ theme }) => ({
  height: "calc(100vh - 64px)",
  background: theme.palette.primary.main,
  zIndex: -1,
}));

export const Grid2Container = styled(Grid2)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const HeroHello = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 700,
  fontSize: theme.spacing(4),
  fontFamily: 'Poppins,sans-serif'
}));

export const MeName = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 700,
  fontSize: theme.spacing(6),
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.secondary,
  fontWeight: 600,
  fontSize: theme.spacing(2),
  margin: theme.spacing(2.5, 0),
}));

export const ButtonWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
 }))

export const RightContainer = styled(Box)(({ theme }) => ({
  width: "550px",
  height: "calc(100% + 70px)",
  background: theme.palette.secondary.light,
  clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 0% 100%)',
  right: 0,
  position: 'absolute',
  top: -70,  
  zIndex: 1,
}));

export const RightContainerDark = styled(Box)(({ theme }) => ({
  width: "400px",
  height: "calc(100% + 70px)",
  background: theme.palette.secondary.main,
  clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)',
  right: 0,
  position: 'absolute',
  top: -70,
  zIndex: 2,
}));
