import React from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@mui/material";
import {
  ExperienceWrapper,
  JobDescription,
  JobTitle,
  StepBox,
  StepDot,
  Title,
} from "./index.styles";
import {
  Description,
  Heading,
  SectionWrapperWhite,
} from "../../common/common.styles";

const experiences = [
  {
    company: "Company A",
    jobTitle: "Software Engineer",
    description: "The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,    ",
  },
  {
    company: "Company B",
    jobTitle: "Full Stack Developer",
    description: "Built and maintained APIs and designed scalable databases.",
  },
  {
    company: "Company C",
    jobTitle: "Frontend Developer",
    description: "Worked on the UI/UX of an e-commerce platform.",
  },
  {
    company: "Company D",
    jobTitle: "Frontend Developer",
    description: "Worked on the UI/UX of an e-commerce platform.",
  },
];

const WorkExperience: React.FC = () => {
  return (
    <SectionWrapperWhite>
      <Heading>Work Experience</Heading>
      <Description>
        Obviously I'm a Web Designer. Web Developer with over 7 years of
        experience. Experienced with all stages of the development.
      </Description>
      <ExperienceWrapper>
        <Stepper orientation="vertical">
          {experiences.map((exp, index) => (
            <Step active key={index} rel="left" >
              <StepLabel
                StepIconComponent={(props) => (
                  <StepBox {...props}>
                    <StepDot></StepDot>
                  </StepBox>
                )}
              >
                <Title>{exp.company}</Title>
              </StepLabel>
              <StepContent>
                <Box>
                  <JobTitle variant="h6">{exp.jobTitle}</JobTitle>
                  <JobDescription variant="body1">
                    {exp.description}
                  </JobDescription>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </ExperienceWrapper>
    </SectionWrapperWhite>
  );
};

export default WorkExperience;
