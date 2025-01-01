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
} from "./index.styles";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
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
            <SectionHeading>Phone:</SectionHeading>
            <IconValueBox>
              <CallIcon />
              <Box>(+91) 9974927198</Box>
            </IconValueBox>

            <SectionHeading>Support:</SectionHeading>
            <IconValueBox>
              <EmailIcon />
              <Box>hellosuppot@gmail.com</Box>
            </IconValueBox>
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
