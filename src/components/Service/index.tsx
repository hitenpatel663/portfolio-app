import { Grid2 } from "@mui/material";
import { ServiceCard } from "../ServiceCard";
import {
  Description,
  Grid2Wrapper,
  Heading,
  SectionWrapper,
  Title,
} from "./index.styles";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useTheme } from "@mui/material/styles";

export const Service = () => {
  const theme = useTheme();
  return (
    <SectionWrapper>
      <Title>WHAT WE OFFER</Title>
      <Heading>Affordable Services</Heading>
      <Description>
        A Private Limited is the most popular type of partnership Malta. The
        limited liability is, in fact, the only type of company allowed by
        Companies.
      </Description>

      <Grid2Wrapper container spacing={2}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ServiceCard
            title="Research & Analysis"
            description="We use a customized application specifically designed a testing gnose to keep away for people."
            color={theme.palette.serviceCard.purple}
            icon={
              <AutorenewIcon
                style={{ color: theme.palette.serviceCard.darkPurple }}
              />
            }
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ServiceCard
            title="Research & Analysis"
            description="We use a customized application specifically designed a testing gnose to keep away for people."
            color={theme.palette.serviceCard.green}
            icon={
              <AutorenewIcon
                style={{ color: theme.palette.serviceCard.darkGreen }}
              />
            }
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ServiceCard
            title="Research & Analysis"
            description="We use a customized application specifically designed a testing gnose to keep away for people."
            color={theme.palette.serviceCard.red}
            icon={
              <AutorenewIcon
                style={{ color: theme.palette.serviceCard.darkRed }}
              />
            }
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ServiceCard
            title="Research & Analysis"
            description="We use a customized application specifically designed a testing gnose to keep away for people."
            color={theme.palette.serviceCard.yellow}
            icon={
              <AutorenewIcon
                style={{ color: theme.palette.serviceCard.darkYellow }}
              />
            }
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ServiceCard
            title="Research & Analysis"
            description="We use a customized application specifically designed a testing gnose to keep away for people."
            color={theme.palette.serviceCard.blue}
            icon={
              <AutorenewIcon
                style={{ color: theme.palette.serviceCard.darkBlue }}
              />
            }
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ServiceCard
            title="Research & Analysis"
            description="We use a customized application specifically designed a testing gnose to keep away for people."
            color={theme.palette.serviceCard.pink}
            icon={
              <AutorenewIcon
                style={{ color: theme.palette.serviceCard.darkPink }}
              />
            }
          />
        </Grid2>
      </Grid2Wrapper>
    </SectionWrapper>
  );
};
