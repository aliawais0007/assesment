import scroll1 from "../../assets/images/scroll1.png";
import scroll2 from "../../assets/images/scroll2.png";
import scroll3 from "../../assets/images/scroll3.png";
import scroll4 from "../../assets/images/scroll4.png";

const ScrollElement1 = () => {
  return (
    <div className={"row justify-content-center"}>
      <div className={"col-12 col-md-6 d-flex align-items-center"}>
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <img src={scroll1} className={"w-100"} alt="my dummy text" />
        </div>
      </div>
      <div className={"col-12 col-md-6"}>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <h2 className={"larger-heading"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </h2>
          <p className="title">Development Features</p>
          <p className="description border-bottom">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="title">Design & Layout</p>
          <p className="description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <ul className={"custom"}>
            <li>Sed magna enim </li>
            <li>Bibendum a quam eu</li>
            <li>Sed magna enim </li>
            <li>Bibendum a quam eu</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ScrollElement2 = () => {
  return (
    <div className={"row justify-content-center scroll-section"}>
      <div className={"col-12 col-md-6 d-flex align-items-center"}>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-delay="300"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <img src={scroll2} className={"w-100"} alt="my dummy text" />
        </div>
      </div>
      <div className={"col-12 col-md-6"}>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-delay="300"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <p className="title">Marketing & SEO</p>
          <p className="description border-bottom">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="title">Business Solutions</p>
          <p className="description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <ul className={"custom"}>
            <li>Sed magna enim </li>
            <li>Bibendum a quam eu</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ScrollElement3 = () => {
  return (
    <div className={"row justify-content-center scroll-section"}>
      <div className={"col-12 col-md-6 d-flex align-items-center"}>
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="400"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <img src={scroll3} className={"w-100"} alt="my dummy text" />
        </div>
      </div>
      <div className={"col-12 col-md-6"}>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="400"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <p className="title">Development Features</p>
          <p className="description border-bottom">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="title">Design & Layout</p>
          <p className="description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <ul className={"custom"}>
            <li>Sed magna enim </li>
            <li>Bibendum a quam eu</li>
            <li>Sed magna enim </li>
            <li>Bibendum a quam eu</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ScrollElement4 = () => {
  return (
    <div className={"row justify-content-center scroll-section"}>
      <div className={"col-12 col-md-6 d-flex align-items-center"}>
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="500"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <img src={scroll4} className={"w-100"} alt="my dummy text" />
        </div>
      </div>
      <div className={"col-12 col-md-6"}>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="500"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <p className="title">Development Features</p>
          <p className="description border-bottom">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="title">Design & Layout</p>
          <p className="description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <ul className={"custom"}>
            <li>Sed magna enim </li>
            <li>Bibendum a quam eu</li>
            <li>Sed magna enim </li>
            <li>Bibendum a quam eu</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const ScrollOne = () => {
  return (
    <section id="scroll1">
      <div className={"container-fluid"}>
        <ScrollElement1 />
        <ScrollElement2 />
        <ScrollElement3 />
        <ScrollElement4 />
      </div>
    </section>
  );
};
