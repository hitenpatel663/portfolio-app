import { Box, Button } from "@mui/material";

import { styled } from "@mui/material/styles";

export const ArrowButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  width: theme.spacing(5),
  height: theme.spacing(5),
  minWidth: theme.spacing(5),
  cursor: 'pointer',
  borderRadius: '50%',
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.bg.dark,
  position: "fixed",
  bottom: 20,
  right: 20,
  backgroundColor: theme.palette.secondary.main,
  zIndex: 9999,
}));
