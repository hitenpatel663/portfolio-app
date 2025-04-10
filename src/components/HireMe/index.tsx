import { PrimaryButton, SectionWrapperGray } from '../../common/common.styles';
import {
  Description,
  Heading,
  ImageContainer,
  ImageContainerWrapper,
  OverLay,
  SectionWrapper,
} from './index.styles';
import hiten from '../../assets/hitenHero.png';
import useIsMobile from '../../hooks/useIsMobile';
export const HireMe = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <SectionWrapper>
        <ImageContainerWrapper>{/* <ImageContainer src={hiten} /> */}</ImageContainerWrapper>

        <OverLay className="overlay">
          <Heading>I Am Available For Freelancer Projects.</Heading>
          <Description isMobile={isMobile}>
            Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced
            with all stages of the development.
          </Description>
          <PrimaryButton>Hire me</PrimaryButton>
        </OverLay>
      </SectionWrapper>
    </>
  );
};
