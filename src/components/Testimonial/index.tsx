import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { TestimonialCard } from '../TestimonialCard';
import { Description, Heading, SectionWrapperWhite } from '../../common/common.styles';
import { HeaderWrapper } from './index.styles';
import useIsMobile from '../../hooks/useIsMobile';

export const Testimonial = () => {
  const isMobile = useIsMobile();
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
      name: 'Inba',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      address: 'USA',
      ratting: 4.5,
    },
    {
      name: 'Ravi Savage',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      address: 'USA',
      ratting: 4.5,
    },
    {
      name: 'Rohith',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      address: 'USA',
      ratting: 5,
    },
    {
      name: 'Kevin Canlas',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      address: 'USA',
      ratting: 4.5,
    },
  ];
  return (
    <SectionWrapperWhite isMobile={isMobile}>
      <HeaderWrapper>
        <Heading>Client's Review</Heading>
        <Description isMobile={isMobile}>
          Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced
          with all stages of the development.
        </Description>
      </HeaderWrapper>
      <OwlCarousel className="owl-theme" {...options}>
        {testiMonials?.map((item) => (
          <TestimonialCard
            designation={item?.address}
            name={item?.name}
            feedback={item?.description}
            rating={item?.ratting}
          />
        ))}
      </OwlCarousel>
    </SectionWrapperWhite>
  );
};
