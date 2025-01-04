import { Card, Description, DividerComp, Heading, Title } from "./index.styles";

export const TestimonialCard = ({
  feedback,
  name,
  designation,
}: {
  feedback: string;
  name: string;
  designation: string;
}) => {
  return (
    <Card>
      <Description>{feedback}</Description>
      <DividerComp />
      <Heading>{name}</Heading>
      <Title>{designation}</Title>
    </Card>
  );
};
