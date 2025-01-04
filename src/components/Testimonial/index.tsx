import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { TestimonialCard } from "../TestimonialCard";
import { Description, Heading, SectionWrapper, Title } from "./index.styles";

export const Testimonial = () => {
    const options = {
        loop: true,
        center: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <SectionWrapper>
            <Title>Testimonial</Title>
            <Heading>People talk about us</Heading>
            <Description>
                A Private Limited is the most popular type of partnership Malta. The
                limited liability is, in fact, the only type of company allowed by
                Companies.
            </Description>

            <OwlCarousel className='owl-theme' {...options}>
                <TestimonialCard designation="Software engineer" name="Inba" feedback="good developer." />
                <TestimonialCard designation="Software engineer" name='Rohith' feedback="Good developer with proper coding" />
                <TestimonialCard designation="Software engineer" name="Inba" feedback="good developer." />
                <TestimonialCard designation="Software engineer" name='Rohith' feedback="Good developer with proper coding" />
            </OwlCarousel>
        </SectionWrapper>
    );
};
