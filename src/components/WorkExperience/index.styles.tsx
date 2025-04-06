import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ExperienceWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'left',
  width: '100%',
}));

export const StepBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  background: theme.palette.secondary.light,
  height: theme.spacing(4),
  width: theme.spacing(4),
  border: `1px dashed ${theme.palette.secondary.main}`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StepDot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  background: theme.palette.secondary.main,
  height: theme.spacing(0.2),
  width: theme.spacing(0.2),
  borderRadius: '50%',
  margin: '0 auto',
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  marginTop: theme.spacing(0),
  fontSize: theme.spacing(2),
}));

export const JobTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.primary,
  fontWeight: 600,
  marginTop: theme.spacing(0),
  fontSize: theme.spacing(2),
  textAlign: 'left',
}));

export const JobDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.secondary,
  fontWeight: 600,
  fontSize: theme.spacing(1.7),
  textAlign: 'left',
  margin: theme.spacing(0.5, 0),
  opacity: '70%',
}));
