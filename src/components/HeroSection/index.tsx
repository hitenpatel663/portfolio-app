import {
  Description,
  Grid2Container,
  Grid2Wrapper,
  HeroHello,
  MeName,
  RightContainer,
  RightContainerDark,
  SectionWrapper,
  HireMe,
  ButtonWrapper,
  SeeMyWork,
} from "./index.styles";
import TypewriterComponent from "typewriter-effect";
import EastIcon from '@mui/icons-material/East';

import SocialMediaLinks from "../SocialMediaLinks";
import hitenImg from "../../assets/hiten.png";

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
          <HireMe>Hire Me</HireMe>
          <SeeMyWork>See Mey work</SeeMyWork>
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
