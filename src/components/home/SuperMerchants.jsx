import Typed from "react-typed";

export const SuperMerchants = () => {
  return (
    <section id="merchants">
      <div className="container-fluid position-relative h-100">
        <div className="row justify-content-center h-100">
          <div className="col-12 col-md-10 col-lg-6 d-flex flex-column justify-content-center">
            <p className={"text-center"}>Super Merchants</p>
            <h2
              data-aos="fade-up"
              data-aos-offset="400"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease"
              className={"larger-header text-center"}
            >
              <Typed
                strings={["Multisite, made easy."]}
                typeSpeed={40}
                loop={true}
              />
            </h2>
            <p
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease"
              className={"text-center"}
            >
              Sed magna enim, bibendum a quam eu, commodo consectetur quam.
              Morbi pellentesque eu dolor luctus sagittis. Praesent commodo
              velit eget urna mollis dignissim. Nunc lobortis, augue non
              pulvinar consequat, enim massa pharetra neque.
            </p>
            <button
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="800"
              data-aos-duration="500"
              data-aos-easing="linear"
              className={"button btn-transparent mx-auto"}
            >
              Explore Super Merchants ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
