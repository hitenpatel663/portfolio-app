import {
  BottomBox,
  Card,
  ChipBox,
  Description,
  IconBox,
  ImageContainer,
  ProjectDetail,
  Title,
} from "./index.styles";
import EastIcon from "@mui/icons-material/East";
import { Chip } from "@mui/material";

export const ProjectCard = ({
  imgUrl,
  title,
  description,
  skills,
}: {
  imgUrl: string;
  title: string;
  description: string;
  skills: string[];
}) => {
  return (
    <Card>
      <ImageContainer src={imgUrl} />
      <BottomBox>
        <Title>{title}</Title>
        <ProjectDetail>
          <Description>{description}</Description>
          <IconBox>
            <EastIcon color="primary" />
          </IconBox>
        </ProjectDetail>
        <ChipBox>
          {skills?.map((skillItem) => (
            <Chip label={skillItem} />
          ))}
        </ChipBox>
      </BottomBox>
    </Card>
  );
};
