import { Grid2 } from '@mui/material';
import { ProjectCard } from '../ProjectCard';
import fieldcamp from '../../assets/fieldcamp.png';
import { Grid2Wrapper } from './index.styles';
import { Description, Heading, SectionWrapperGray } from '../../common/common.styles';
import useIsMobile from '../../hooks/useIsMobile';

export const Works = () => {
  const isMobile = useIsMobile();
  return (
    <SectionWrapperGray isMobile={isMobile}>
      <Heading>My Latest Work</Heading>
      <Description isMobile={isMobile}>
        Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced
        with all stages of the development.
      </Description>

      <Grid2Wrapper container spacing={2}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ProjectCard
            title="Fieldcamp"
            description="FieldCamp comes with all the essential features, such as scheduling, dispatching, invoicing, follow-ups, payment processing, reporting, and even customer reviews — it’s all packed into a small but mighty field service company app."
            imgUrl={fieldcamp}
            skills={['Reactjs', 'Typescript', 'Redux', 'MUI']}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ProjectCard
            title="Fieldcamp"
            description="FieldCamp comes with all the essential features, such as scheduling, dispatching, invoicing, follow-ups, payment processing, reporting, and even customer reviews — it’s all packed into a small but mighty field service company app."
            imgUrl={fieldcamp}
            skills={['Reactjs', 'Typescript', 'Redux', 'MUI']}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ProjectCard
            title="Fieldcamp"
            description="FieldCamp comes with all the essential features, such as scheduling, dispatching, invoicing, follow-ups, payment processing, reporting, and even customer reviews — it’s all packed into a small but mighty field service company app."
            imgUrl={fieldcamp}
            skills={['Reactjs', 'Typescript', 'Redux', 'MUI']}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ProjectCard
            title="Fieldcamp"
            description="FieldCamp comes with all the essential features, such as scheduling, dispatching, invoicing, follow-ups, payment processing, reporting, and even customer reviews — it’s all packed into a small but mighty field service company app."
            imgUrl={fieldcamp}
            skills={['Reactjs', 'Typescript', 'Redux', 'MUI']}
          />
        </Grid2>
      </Grid2Wrapper>
    </SectionWrapperGray>
  );
};
