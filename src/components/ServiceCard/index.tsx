import { Card, Description, IconBox, Title } from './index.styles';
export const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => {
  return (
    <Card>
      <IconBox>{icon}</IconBox>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};
