import glowImage from "../../assets/images/glow.svg";
import sonosImage from "../../assets/images/sonos.png";

export const Banner = () => {
  return (
    <section id="banner">
      <div className={"container-fluid"}>
        <div className={"row justify-content-center "}>
          <div
            className={
              "col-12 col-md-10 col-lg-6 p-40 d-flex align-items-end order-lg-1 order-2"
            }
          >
            <div className={"wrapperCol"}>
              <h2 className={"larger-heading banner-heading"}>
                <span className={"color-blue"}>KMMRCE</span> is an enterprise
                level digital platform that provides a turnkey solution to
                online retailing.
              </h2>
              <button
                className={"button common-btn mx-lg-0 mx-auto my-2 my-lg-5"}
              >
                Request Demo ›
              </button>
            </div>
          </div>
          <div
            className={
              "col-12 col-md-10 col-lg-6 p-40 border-left order-1 order-lg-2"
            }
          >
            <div className={"wrapperCol justify-content-center"}>
              <img
                className={"bg-img rotation-animation"}
                src={glowImage}
                alt="glow"
              />
              <img
                src={sonosImage}
                className={"center-img bonos"}
                alt="bonos"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
