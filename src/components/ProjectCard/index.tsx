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
import {
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ImageContainer src={imgUrl} onClick={handleClickOpen} />

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        maxWidth={'lg'}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        <Title>{title}</Title>
        </DialogTitle>
        <DialogContent>
          <Card>
            <ImageContainer src={imgUrl} onClick={handleClickOpen} />
            <BottomBox>
              <Title>{title}</Title>
              <ProjectDetail>
                <Description>{description}</Description>
                <IconBox>
                  <EastIcon color="primary" />
                </IconBox>
              </ProjectDetail>
              <ChipBox >
                {skills?.map((skillItem) => (
                  <Chip label={skillItem} />
                ))}
              </ChipBox>
            </BottomBox>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};
