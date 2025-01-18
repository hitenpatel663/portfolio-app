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
    fontSize: theme.spacing(4),
  }));

  export const Container = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }));


  export const LeftContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    width: '50%',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  export const RightContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    width: '50%',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }));