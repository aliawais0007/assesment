import feeds1 from "../../assets/images/feeds1.svg";
import feeds2 from "../../assets/images/feeds2.png";
import feeds3 from "../../assets/images/feeds3.svg";

const ScrollElement1 = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-delay="100"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
    >
      <p className="description">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
      <ul className={"custom"}>
        <li>Sed magna enim </li>
        <li>Bibendum a quam eu</li>
      </ul>
      <img src={feeds1} alt="my dummy text" className={"w-100"} />
    </div>
  );
};

const ScrollElement2 = () => {
  return (
    <div>
      <p className="description">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
      <ul className={"custom"}>
        <li>Sed magna enim </li>
        <li>Bibendum a quam eu</li>
      </ul>
      <img src={feeds2} alt="my dummy text" className={"w-100"} />
    </div>
  );
};

const ScrollElement3 = () => {
  return (
    <div>
      <p className="description">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
      <ul className={"custom"}>
        <li>Sed magna enim </li>
        <li>Bibendum a quam eu</li>
      </ul>
      <img src={feeds3} alt="my dummy text" className={"w-100"} />
    </div>
  );
};

export const Feeds = () => {
  return (
    <section id="feeds">
      <div className={"container-fluid"}>
        <div
          className={"row justify-content-center justify-content-lg-between"}
        >
          <div className="col-12 col-md-10 col-lg-6 scroll">
            <ScrollElement1 />
            <ScrollElement2 />
            <ScrollElement3 />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="400"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            className={"col-12 col-md-10 col-lg-5"}
          >
            <h2 className={"larger-heading"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </h2>
            <h5>Stay up to date with the feed</h5>
            <span>
              <a>Keep track of</a> projects
            </span>
            <h5>Invite and view your team members</h5>
          </div>
        </div>
      </div>
    </section>
  );
};
