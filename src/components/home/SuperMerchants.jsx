import { useState, useEffect, useRef } from "react";
import Typed from "react-typed";
import baloons from "../../assets/images/baloons.svg";

export const SuperMerchants = () => {
  const imgRef = useRef();
  const [isIntersecting, setIntersecting] = useState(false);
  const [transform, setTransform] = useState(0);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  const topPosition =
    imgRef.current && imgRef.current.getBoundingClientRect().top;
  const onScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    
    if (isIntersecting) {
      setTransform(transform + 50);
      imgRef.current.style.transform = `rotateX(${transform + 50}px`;
    }
  };
  useEffect(() => {
    observer.observe(imgRef.current);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
    if (isIntersecting) {
    }
  }, [isIntersecting]);
  return (
    <section id="merchants">
      <div className={"bg-wrapper"}>
        <img
          src={baloons}
          alt=""
          ref={imgRef}
          style={{ transform: "rotate(0px, 0)" }}
        />
      </div>
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
