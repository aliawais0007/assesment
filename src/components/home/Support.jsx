import icon1 from "../../assets/images/icon1.svg";
import icon2 from "../../assets/images/icon2.svg";
import icon3 from "../../assets/images/icon3.svg";

export const Support = () => {
  return (
    <section id="support">
      <div className={"container-fluid"}>
        <div className={"row justify-content-center"}>
          <div
            className="heading-section"
            data-aos="fade-up"
            data-aos-offset="600"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            <span>Serving Our Customer</span>
            <h2 className={"larger-heading"}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla
              pariatur.
            </h2>
          </div>
        </div>
        <div className={"row justify-content-center"}>
          <div className="col-md-4 col-11 border-top">
            <div
              className={"card"}
              data-aos="fade-up"
              data-aos-offset="400"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <img src={icon1} alt="icon 1" />
              <span>24/7 Tech Support</span>
              <p>
                Sed magna enim, bibendum a quam eu, commodo quam. Morbi
                pellentesque eu dolor luctus sagittis Praesent velit.
              </p>
              <button className={"button btn-transparent"}>
                Contact Support ›
              </button>
            </div>
          </div>
          <div className="col-md-4 col-11 border-top border-left-right">
            <div
              className={"card"}
              data-aos="fade-up"
              data-aos-offset="400"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <img src={icon2} alt="icon 2" />
              <span>Loyalty Benefits</span>
              <p>
                Sed magna enim, bibendum a quam eu, commodo quam. Morbi
                pellentesque eu dolor luctus sagittis Praesent velit.
              </p>
              <button className={"button btn-transparent"}>
                Get Started ›
              </button>
            </div>
          </div>
          <div className="col-md-4 col-11 border-top">
            <div
              className={"card"}
              data-aos="fade-up"
              data-aos-offset="400"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <img src={icon3} alt="icon 3" />
              <span>Scalable Pricing</span>
              <p>
                Sed magna enim, bibendum a quam eu, commodo quam. Morbi
                pellentesque eu dolor luctus sagittis Praesent velit.
              </p>
              <button className={"button btn-transparent"}>
                See Pricing ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
