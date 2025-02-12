import { Box } from "@mui/material";
import {
  DividerComp,
  Grid2Container,
  Grid2Wrapper,
  Heading,
  IconValueBox,
  SectionGroup,
  SectionHeading,
  SectionWrapper,
  Title,
  ValueBox,
} from "./index.styles";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ContactForm } from "../ContactForm";

export const ContactUs = () => {
  return (
    <Grid2Wrapper container spacing={2}>
      <Grid2Container size={{ xs: 12, md: 5 }}>
        <SectionWrapper>
          <Heading>Let's Connect</Heading>
          <Title>
            Looking for help? Fill the form and start a new adventure.
          </Title>
          <DividerComp />
          <SectionGroup>
            <Box>
              <IconValueBox>
                <CallIcon />
                <SectionHeading>Phone</SectionHeading>
              </IconValueBox>
              <ValueBox>(+91) 9974927198</ValueBox>
            </Box>
            <Box>
              <IconValueBox>
                <EmailIcon />
                <SectionHeading>Support</SectionHeading>
              </IconValueBox>
              <ValueBox>hellosuppot@gmail.com</ValueBox>
            </Box>
            <Box>
              <IconValueBox>
                <LocationOnIcon />
                <SectionHeading>Location</SectionHeading>
              </IconValueBox>
              <ValueBox>C/54 Northwest Freeway, Suite 558, Houston, USA 485</ValueBox>
            </Box>
          </SectionGroup>
        </SectionWrapper>
      </Grid2Container>
      <Grid2Container size={{ xs: 12, md: 7 }}>
        <SectionWrapper>
          <ContactForm />
        </SectionWrapper>
      </Grid2Container>
    </Grid2Wrapper>
  );
};
