import logo from "../../assets/images/logo.svg";

export const Footer = () => {
  return (
    <section id="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-md-1 col-3">
            <img src={logo} alt="logo" />
          </div>
          <div className={"col-9 d-block d-md-none"}>
            <ul>
              <li className={"first"}>Product</li>
              <li>Home</li>
              <li>About</li>
              <li>Dolre</li>
              <li>Tertiary</li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-3 d-none d-md-block">
            <ul>
              <li className={"first"}>Product</li>
              <li>Home</li>
              <li>About</li>
              <li>Tech Stack</li>
              <li>Super Merchants</li>
              <li>Pricing</li>
              <li>Partners</li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-2 d-none d-md-block">
            <ul>
              <li className={"first"}>About</li>
              <li>Sectors</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-3 d-none d-md-block">
            <ul>
              <li className={"first"}>Dolore</li>
              <li>Voluptate</li>
              <li>Cillum</li>
              <li>Pariatur.</li>
              <li>Nulla</li>
              <li>Irure</li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-3 d-none d-md-block">
            <ul>
              <li className={"first"}>Tertiary</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
