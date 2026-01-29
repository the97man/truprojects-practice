import { BrowserRouter } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import HeroImageSlider from "../components/HeroImageSlider";
import Services from "../components/Services";

export default function Home() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <MainNavbar />
      <HeroImageSlider />
      <Services />
    </BrowserRouter>
  );
}
