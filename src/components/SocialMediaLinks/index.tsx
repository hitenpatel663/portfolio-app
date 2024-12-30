import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SectionWrapper, SocialButton } from "./index.styles";

const SocialMediaLinks = () => {
  const theme = useTheme();

  return (
    <SectionWrapper>
      <SocialButton
        style={{
          backgroundColor: theme.palette.socialMedia.facebook,
          marginLeft: 0,
        }}
        href="https://facebook.com"
      >
        <FacebookIcon />
      </SocialButton>
      <SocialButton
        style={{ backgroundColor: theme.palette.socialMedia.twitter }}
        href="https://twitter.com"
      >
        <TwitterIcon />
      </SocialButton>
      <SocialButton
        style={{ backgroundColor: theme.palette.socialMedia.instagram }}
        href="https://instagram.com"
      >
        <InstagramIcon />
      </SocialButton>
      <SocialButton
        style={{ backgroundColor: theme.palette.socialMedia.linkdin }}
        href="https://linkedin.com"
      >
        <LinkedInIcon />
      </SocialButton>
    </SectionWrapper>
  );
};

export default SocialMediaLinks;
