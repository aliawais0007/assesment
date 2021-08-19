import { useState, useLayoutEffect, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { navOptions } from "../../contants";
import { Header } from "./DrawerMenu";

const NavOptions = () => {
  let history = useHistory();
  return navOptions.map((option, index) => (
    <button
      onClick={() => {
        history.push(`#${option.replaceAll(" ", "").toLowerCase()}`);
      }}
      className={"button custom-navlink"}
      key={index}
      href={`#${option}`}
    >
      {option}
    </button>
  ));
};

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export const NavBar = () => {
  const [width, height] = useWindowSize();
  const [isOpened, toggleDrawer] = useState(false);

  const setDrawerStatus = (status) => {
    toggleDrawer(status);
  };

  useEffect(() => {
    toggleDrawer(false);
  }, [width]);
  return (
    <nav className={"container-fluid sticky-top"}>
      <Header isOpened={isOpened} setDrawerStatus={setDrawerStatus} />
      <div className={"row w-100"}>
        <div className="col-xl-2 col-md-4 col-8">
          <a href="#" className={"logo-text"}>
            KMMRCE
          </a>
        </div>
        <div className="col-xl-8 col-md-8 col-4 d-flex align-items-center justify-content-end justify-content-xl-center">
          {width > 1200 ? (
            <NavOptions />
          ) : (
            <MenuIcon
              className={"menuIcon"}
              onClick={() => {
                toggleDrawer(true);
              }}
              style={{ color: "#000", fontSize: 50 }}
            />
          )}
        </div>
        <div className="col-2 d-flex align-items-center d-none d-xl-flex">
          <button className={"button common-btn"}>Request Demo</button>
        </div>
      </div>
    </nav>
  );
};
