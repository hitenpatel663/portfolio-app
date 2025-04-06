import { Description, Heading, SectionWrapper, SocialMediaLinksWrapper } from './index.styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useIsMobile from '../../hooks/useIsMobile';

export const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <SectionWrapper isMobile={isMobile}>
      <Heading>Hiten.</Heading>
      <Description>
        © 2025 Hiten. Design & Develop with <FavoriteIcon style={{ color: 'red' }} />
      </Description>
      <SocialMediaLinksWrapper>
        <FacebookIcon style={{ cursor: 'pointer' }} />
        <TwitterIcon style={{ cursor: 'pointer' }} />
        <InstagramIcon style={{ cursor: 'pointer' }} />
        <LinkedInIcon style={{ cursor: 'pointer' }} />
      </SocialMediaLinksWrapper>
    </SectionWrapper>
  );
};
