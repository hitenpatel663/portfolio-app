import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { TestimonialCard } from "../TestimonialCard";
import {
  Description,
  Heading,
  SectionWrapperWhite,
} from "../../common/common.styles";

export const Testimonial = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  const testiMonials = [
    {
      name: "Inba",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
    },
    {
      name: "Ravi Savage",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
    },
    {
      name: "Rohith",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
    },
    {
      name: "Kevin Canlas",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
    },
  ];
  return (
    <SectionWrapperWhite>
      <Heading>Client's Review</Heading>
      <Description>
        Obviously I'm a Web Designer. Web Developer with over 7 years of
        experience. Experienced with all stages of the development.
      </Description>

      <OwlCarousel className="owl-theme" {...options}>
        {testiMonials?.map((item) => (
          <TestimonialCard
            designation={item?.address}
            name={item?.name}
            feedback={item?.description}
          />
        ))}
      </OwlCarousel>
    </SectionWrapperWhite>
  );
};
