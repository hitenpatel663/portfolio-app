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
  ImageContainer,
} from './index.styles';
import TypewriterComponent from 'typewriter-effect';
import SocialMediaLinks from '../SocialMediaLinks';
import { PrimaryButton, SecondaryButton } from '../../common/common.styles';
import hiten from '../../assets/hitenHero.png';
import useIsMobile from '../../hooks/useIsMobile';

export const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Grid2Wrapper isMobile={isMobile} container spacing={2}>
      <Grid2Container isMobile={isMobile} size={{ xs: 12, md: 6 }}>
        <SectionWrapper isMobile={isMobile}>
          <HeroHello>Hey! I'm</HeroHello>
          <MeName>
            <TypewriterComponent
              options={{
                strings: ['Hiten Savaliya'],
                autoStart: true,
                loop: true,
              }}
            ></TypewriterComponent>
          </MeName>
          <Description>
            Building simple and beautiful things for complex interfaces is what I enjoy most about
            my work. I am also interested in crafting beautiful minimal products and exploring new
            worlds.
          </Description>
          <SocialMediaLinks />
          <ButtonWrapper>
            <PrimaryButton>Hire Me</PrimaryButton>
            <SecondaryButton>See My work</SecondaryButton>
          </ButtonWrapper>
        </SectionWrapper>
      </Grid2Container>

      <Grid2Container isMobile={isMobile} size={{ xs: 12, md: 6 }}>
        <ImageContainer src={hiten} />
        {!isMobile && (
          <>
            <RightContainer />
            <RightContainerDark />
          </>
        )}
      </Grid2Container>
    </Grid2Wrapper>
  );
};
