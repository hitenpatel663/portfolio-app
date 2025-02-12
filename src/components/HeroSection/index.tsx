import {
  Description,
  Grid2Container,
  Grid2Wrapper,
  HeroHello,
  MeName,
  RightContainer,
  RightContainerDark,
  SectionWrapper,
  ButtonWrapper,
} from "./index.styles";
import TypewriterComponent from "typewriter-effect";
import SocialMediaLinks from "../SocialMediaLinks";
import { PrimaryButton, SecondaryButton } from "../../common/common.styles";

export const HeroSection = () => {
  return (
    <Grid2Wrapper container spacing={2}>
      <Grid2Container size={{ xs: 12, md: 6 }}>
        <SectionWrapper>
          <HeroHello>Hey! I'm</HeroHello>
          <MeName>
            <TypewriterComponent
              options={{
                strings: ["Hiten Savaliya"],
                autoStart: true,
                loop: true,
              }}
            ></TypewriterComponent>
          </MeName>
          <Description>
            Building simple and beautiful things for complex interfaces is what
            I enjoy most about my work. I am also interested in crafting
            beautiful minimal products and exploring new worlds.
          </Description>
          <SocialMediaLinks />
          <ButtonWrapper>
            <PrimaryButton>Hire Me</PrimaryButton>
            <SecondaryButton>See My work</SecondaryButton>
          </ButtonWrapper>
        </SectionWrapper>
      </Grid2Container>

      <Grid2Container size={{ xs: 12, md: 6 }}>
        <RightContainer />
        <RightContainerDark />
      </Grid2Container>
    </Grid2Wrapper>
  );
};
