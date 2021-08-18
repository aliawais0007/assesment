import testimonialImg from "../../assets/images/testimonial.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Carousel
              showArrows={false}
              showThumbs={false}
              swipeable={true}
              autoPlay={true}
              interval={5000}
            >
              <div>
                <h2 className={"larger-heading"}>
                  “<br />
                  KMMRCE is an ideal solution for anyone looking to build a
                  bespoke e-commerce website. A great foundation has been
                  designed not only to get you started on a fully-fledged
                  storefront with minimal effort.
                  <br />“
                </h2>

                <img src={testimonialImg} alt="testimonial" />
                <p>Tyler Hildebrand, Head of Engineering at Patch</p>
              </div>

              <div>
                <h2 className={"larger-heading"}>
                  “<br />
                  KMMRCE is an ideal solution for anyone looking to build a
                  bespoke e-commerce website. A great foundation has been
                  designed not only to get you started on a fully-fledged
                  storefront with minimal effort.
                  <br />“
                </h2>

                <img src={testimonialImg} alt="testimonial" />
                <p>Tyler Hildebrand, Head of Engineering at Patch</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
