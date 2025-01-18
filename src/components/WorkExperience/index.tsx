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
  JobDescription,
  SectionWrapper,
  StepBox,
  StepDot,
  Title,
} from "./index.styles";

const experiences = [
  {
    company: "Company A",
    jobTitle: "Software Engineer",
    description: "Developed web applications and led the frontend team.",
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
];

const WorkExperience: React.FC = () => {
  return (
    <SectionWrapper>
      <Stepper orientation="vertical">
        {experiences.map((exp, index) => (
          <Step active key={index}>
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
                <Title variant="h6">{exp.jobTitle}</Title>
                <JobDescription variant="body1">
                  {exp.description}
                </JobDescription>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </SectionWrapper>
  );
};

export default WorkExperience;
