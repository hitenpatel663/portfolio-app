import { PrimaryButton } from "../../common/common.styles";
import {
  Description,
  Heading,
  ImageContainer,
  SectionWrapper,
} from "./index.styles";
import hiten from "../../assets/hiten.png";
export const HireMe = () => {
  return (
    <>
      <SectionWrapper>
        <ImageContainer src={hiten} />
        <Heading>I Am Available For Freelancer Projects.</Heading>
        <Description>
          Obviously I'm a Web Designer. Web Developer with over 7 years of
          experience. Experienced with all stages of the development.
        </Description>
        <PrimaryButton>Hire me</PrimaryButton>
      </SectionWrapper>
    </>
  );
};
