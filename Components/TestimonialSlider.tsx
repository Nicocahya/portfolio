import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
};

const TestimonialSlider = () => {
    return <Carousel 
    additionalTransfrom={0}
    arrows={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    centerMode={false}
    infinite
    responsive={responsive}
    itemClass="item"
    >
        {/* Client */}

        <ClientReview image="/images/c1.jpg" name="Nico Cahya" role="Web Developer"/>
        <ClientReview image="/images/c2.jpg" name="Cahya" role="Mern Stack Developer"/>
        <ClientReview image="/images/c1.jpg" name="Nico" role="React Developer"/>
        <ClientReview image="/images/c2.jpg" name="Ramadani" role="Next js Developer"/>
  </Carousel>;
}

export default TestimonialSlider;