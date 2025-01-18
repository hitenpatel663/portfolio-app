import SkillBar from "../Skillbar";
import WorkExperience from "../WorkExperience";
import { Container, LeftContainer, RightContainer, SectionWrapper, Title } from "./index.styles";

export const AboutMe = () => {
  return (
    <SectionWrapper>
      <Title>About me</Title>
      <Container>
      <LeftContainer>
        <SkillBar skillName="React" progress={85} color="#61dafb" />
        <SkillBar skillName="TypeScript" progress={90} color="#007acc" />
        <SkillBar skillName="Node.js" progress={75} color="#68a063" />
        <SkillBar skillName="CSS" progress={80} color="#264de4" />
      </LeftContainer>
      <RightContainer>
        <WorkExperience />
      </RightContainer>
      </Container>
    </SectionWrapper>
  );
};
