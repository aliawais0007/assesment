import bdGirl from "../../assets/images/case_study_bg.png";
import bgOverlay from "../../assets/images/case_study_overlay.svg";
import bgOverlay_ from "../../assets/images/overlay_.svg";

export const CaseStudy = () => {
  return (
    <section id="casestudy">
      <div className="container-fluid">
        <div className="row justify-content-center ">
          <div
            className={"col-12 col-md-10 col-lg-6 p-40 d-flex align-items-end"}
          >
            <div
              className={"wrapperCol"}
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <span>Case Study</span>
              <h2 className={"larger-heading"}>
                Created with KMMRCE: Watch 1010
              </h2>
              <p>
                Disrupting and democratizing healthcare. Butterfly’s ambitious,
                rapid global scale-out is only possible with the support of
                Saleor. Their incredible journey has already taken the company
                from a disruptive startup to Apple Design Awards Winner 2019
              </p>
              <div className={"d-flex flex-wrap"}>
                <button className={"button btn-transparent my-2 my-md-5"}>
                  View Case Study ›
                </button>
                <button className={"button btn-transparent my-2 my-md-5"}>
                  View All ›
                </button>
              </div>
            </div>
          </div>
          <div className={"col-12 col-md-10 col-lg-6 px-0"}>
            <div className={"position-relative"}>
              <img
                className={"bg-img"}
                src={bdGirl}
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                alt="my dummy text"
              />
              <img
                src={bgOverlay}
                className={"center-img"}
                alt="my dummy text"
              />
              <img
                src={bgOverlay_}
                className={"overlay_"}
                alt="my dummy text"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
