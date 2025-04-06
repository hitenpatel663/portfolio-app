import { SecondaryButton, SectionWrapperWhite } from '../../common/common.styles';
import useIsMobile from '../../hooks/useIsMobile';
import {
  Container,
  Description,
  Heading,
  LeftContainer,
  ImgBox,
  RightContainer,
  BoxCard,
  SmallTextHeading,
  SmallTextHeighlight,
  SmallTextDesc,
} from './index.styles';

export const AboutMe = () => {
  const isMobile = useIsMobile();
  return (
    <SectionWrapperWhite isMobile={isMobile}>
      <Container isMobile={isMobile}>
        <LeftContainer>
          <ImgBox />
          <BoxCard>
            <SmallTextHeading>Web Developer</SmallTextHeading>
            <SmallTextHeighlight>4+ </SmallTextHeighlight>
            <SmallTextDesc>Years Experience</SmallTextDesc>
          </BoxCard>
        </LeftContainer>
        <RightContainer isMobile={isMobile}>
          <Heading>I'm a Passionate Web Developer</Heading>
          <Description>
            Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced
            with all stages of the development cycle for dynamic web projects. The as opposed to
            using 'Content here, content here', making it look like readable English.
          </Description>
          <Description>
            I'm a professional web designer. My motive is to build a best web design with my all
            years of experience.
          </Description>
          <SecondaryButton>See work</SecondaryButton>
        </RightContainer>
      </Container>
    </SectionWrapperWhite>
  );
};
