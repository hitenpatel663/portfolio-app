import { Grid2 } from "@mui/material";
import { ProjectCard } from "../ProjectCard";
import fieldcamp from "../../assets/fieldcamp.png";
import {
  Heading,
  SectionWrapper,
  Description,
  Grid2Wrapper,
} from "./index.styles";

export const Works = () => {
  return (
    <SectionWrapper>
      <Heading>My Latest Work</Heading>
      <Description>Prefect solution for digital experience</Description>

      <Grid2Wrapper container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ProjectCard
            title="Fieldcamp"
            description="FieldCamp comes with all the essential features, such as scheduling, dispatching, invoicing, follow-ups, payment processing, reporting, and even customer reviews — it’s all packed into a small but mighty field service company app."
            imgUrl={fieldcamp}
            skills={["Reactjs", "Typescript", "Redux", "MUI"]}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ProjectCard
            title="Fieldcamp"
            description="FieldCamp comes with all the essential features, such as scheduling, dispatching, invoicing, follow-ups, payment processing, reporting, and even customer reviews — it’s all packed into a small but mighty field service company app."
            imgUrl={fieldcamp}
            skills={["Reactjs", "Typescript", "Redux", "MUI"]}
          />
        </Grid2>
      </Grid2Wrapper>
    </SectionWrapper>
  );
};
