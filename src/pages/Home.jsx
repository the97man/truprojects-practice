import { BrowserRouter } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import HeroImageSlider from "../components/HeroImageSlider";
import Services from "../components/Services";
import AboutUsSection from "../components/AboutUsSection";
import LatestTech from "../components/LatestTech";
import YTChannel from "../components/YTChannel";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <HeroImageSlider />
      <Services />
      <AboutUsSection />
      <LatestTech />
      <YTChannel />
      <Testimonials />
      <Footer />
    </>
  );
}
