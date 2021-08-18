import { NavBar } from "../common/NavBar";
import { Banner } from "../home/Banner";
import { SellDigital } from "../home/SellDigital";
import { ScrollOne } from "../home/ScrollOne";
import { Testimonials } from "../home/Testimonials";
import { CaseStudy } from "../home/CaseStudy";
import { SuperMerchants } from "../home/SuperMerchants";
import { Feeds } from "../home/Feeds";
import { Support } from "../home/Support";
import { Plans } from "../home/Plans";
import { Footer } from "../common/Footer";
import { RequestDemo } from "../home/RequestDemo";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <SellDigital />
      <ScrollOne />
      <Testimonials />
      <CaseStudy />
      <SuperMerchants />
      <Feeds />
      <Support />
      <ScrollOne />
      <Plans />
      <RequestDemo />
      <Footer />
    </>
  );
};
