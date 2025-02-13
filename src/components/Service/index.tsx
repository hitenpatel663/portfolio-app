import { Grid2 } from "@mui/material";
import { ServiceCard } from "../ServiceCard";
import {
  Description,
  Grid2Wrapper,
  Heading,
  SectionWrapper,
} from "./index.styles";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useTheme } from "@mui/material/styles";

export const Service = () => {
  const theme = useTheme();
  return (
    <SectionWrapper>
      <Heading>What do i offer?</Heading>
      <Description>
        A Private Limited is the most popular type of partnership Malta. The
        limited liability is, in fact, the only type of company allowed by
        Companies.
      </Description>

      <Grid2Wrapper container spacing={4}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ServiceCard
            title="Research & Analysis"
            description="We use a customized application specifically designed a testing gnose to keep away for people."
            icon={
              <AutorenewIcon
                style={{ color: theme.palette.secondary.main, height: '40px', width: '40px' }}
              />
            }
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ServiceCard
            title="Research & Analysis"
            description="We use a customized application specifically designed a testing gnose to keep away for people."
            icon={
              <AutorenewIcon
                style={{ color: theme.palette.secondary.main, height: '40px', width: '40px' }}
              />
            }
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ServiceCard
            title="Research & Analysis"
            description="We use a customized application specifically designed a testing gnose to keep away for people."
            icon={
              <AutorenewIcon
                style={{ color: theme.palette.secondary.main, height: '40px', width: '40px' }}
              />
            }
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ServiceCard
            title="Research & Analysis"
            description="We use a customized application specifically designed a testing gnose to keep away for people."
            icon={
              <AutorenewIcon
                style={{ color: theme.palette.secondary.main, height: '40px', width: '40px' }}
              />
            }
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ServiceCard
            title="Research & Analysis"
            description="We use a customized application specifically designed a testing gnose to keep away for people."
            icon={
              <AutorenewIcon
                style={{ color: theme.palette.secondary.main, height: '40px', width: '40px' }}
              />
            }
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ServiceCard
            title="Research & Analysis"
            description="We use a customized application specifically designed a testing gnose to keep away for people."
            icon={
              <AutorenewIcon
                style={{ color: theme.palette.secondary.main, height: '40px', width: '40px' }}
              />
            }
          />
        </Grid2>
      </Grid2Wrapper>
    </SectionWrapper>
  );
};
