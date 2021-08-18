import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.png";

export const SellDigital = () => {
  return (
    <section id="selldigital">
      <div className={"container-fluid"}>
        <div className={"row justify-content-center"}>
          <div className={"imgWrapper"}>
            <img
              className={"img1 mobile-hide"}
              src={img1}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              alt="my dummy text"
            />
            <img
              className={"img2 mobile-hide"}
              src={img2}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              alt="my dummy text"
            />
            <img
              className={"img3 mobile-hide"}
              src={img3}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              alt="my dummy text"
            />
          </div>
          <div
            className={
              "col-12 col-md-10 col-lg-10 col-xl-8 d-flex flex-column align-items-center justify-content-center"
            }
          >
            <p
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Platform
            </p>
            <h2
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className={"larger-heading"}
            >
              Sell digital or physical inventory, with configurable or simple
              attributes, in a way that suits your business.
            </h2>
            <button
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className={"button"}
            >
              Explore the Platform ›
            </button>
          </div>
          <div className={"imgWrapper"}>
            <img
              className={"img4 mobile-hide"}
              src={img4}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              alt="my dummy text"
            />
            <img
              className={"img5 mobile-hide"}
              src={img5}
              data-aos="fade-up"
              data-aos-offset="400"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              alt="my dummy text"
            />
            <img
              className={"img6 mobile-hide"}
              src={img6}
              data-aos="fade-up"
              data-aos-offset="400"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              alt="my dummy text"
            />
            <img
              className={"img7 mobile-hide"}
              src={img7}
              data-aos="fade-up"
              data-aos-offset="400"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              alt="my dummy text"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
