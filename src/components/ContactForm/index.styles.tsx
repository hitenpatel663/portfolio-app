import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";

import { styled } from "@mui/material/styles";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: theme.palette.primary.main,
  width: "100%",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3.5),
  borderRadius: "30px",
  borderLeft: `8px solid ${theme.palette.secondary.main}`,
  borderRight: `1px solid ${theme.palette.secondary.main}`,
  borderTop: `1px solid ${theme.palette.secondary.main}`,
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 600,
  fontSize: theme.spacing(2),
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  fontSize: theme.spacing(5),
}));

export const TextFieldComp = styled(TextField)(({ theme }) => ({
  background: theme.palette.bg.main,
  "& label.Mui-focused": {
    color: theme.palette.tertiary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.secondary.main,
  },
  "& .MuiOutlinedInput-root": {
    ".MuiOutlinedInput-notchedOutline ": {
      borderColor: theme.palette.secondary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
    },
  },
}));

export const SubmitMessageButton = styled(Button)(({ theme }) => ({
  width: "100%",
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  fontSize: theme.spacing(2),
  background: theme.palette.secondary.main,
}));
