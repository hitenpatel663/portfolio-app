import {
  Description,
  Grid2Container,
  Grid2Wrapper,
  HeroHello,
  MeName,
  SectionWrapper,
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
          <HeroHello>Hello! I AM</HeroHello>
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
          <SeeMyWork>See my work <EastIcon /></SeeMyWork>
        </SectionWrapper>
      </Grid2Container>

      <Grid2Container size={{ xs: 12, md: 6 }}>
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stop-color="rgba(47, 179, 174, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stop-color="rgba(47, 179, 174, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M22.5,-38.5C28.8,-35.4,33.3,-28.6,33.5,-21.6C33.8,-14.5,29.8,-7.3,26.8,-1.7C23.8,3.8,21.7,7.6,19.5,11.2C17.3,14.8,14.9,18.1,11.6,22.2C8.3,26.2,4.1,30.8,-0.7,32C-5.5,33.2,-11,30.9,-14.4,26.9C-17.7,23,-19,17.3,-22,12.5C-25,7.8,-29.9,3.9,-30.5,-0.4C-31.2,-4.6,-27.6,-9.2,-25.2,-15.1C-22.8,-21,-21.6,-28.2,-17.6,-32.5C-13.6,-36.9,-6.8,-38.5,0.7,-39.7C8.1,-40.8,16.3,-41.5,22.5,-38.5Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="0"
            stroke="url(#sw-gradient)"
          ></path>
          <image href={hitenImg} x="25%" y="15%" width="70%" height="70%" />
        </svg>
      </Grid2Container>
    </Grid2Wrapper>
  );
};
