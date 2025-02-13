import { ArrowButton } from "./index.styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
export const ScrollToTop = () => {
  const handleScrollToTop = () => {
    const targetSection = document.getElementById("#home");

    if (targetSection) {
      window.scrollTo({
        top:
          targetSection.getBoundingClientRect().top + window.pageYOffset - 64,
        behavior: "smooth",
      });
    }
  };
  return (
    <ArrowButton onClick={handleScrollToTop}>
      <ArrowUpwardIcon />
    </ArrowButton>
  );
};
