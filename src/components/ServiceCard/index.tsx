import { Card, Description, IconBox, Title } from "./index.styles";
export const ServiceCard = ({
  color,
  icon,
  title,
  description,
}: {
  color: string;
  icon: JSX.Element;
  title: string;
  description: string;
}) => {
  return (
    <Card>
      <IconBox color={color}>{icon}</IconBox>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};
