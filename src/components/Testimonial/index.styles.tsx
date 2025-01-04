import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SectionWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(0,12,7,12),
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
  
  export const Description = styled(Typography)(({ theme }) => ({
    color: theme.palette.textColor.secondary,
    fontWeight: 600,
    fontSize: theme.spacing(2),
    width: '60%',
    textAlign: 'center',
    margin: theme.spacing(2.5, 0),
  }));
  