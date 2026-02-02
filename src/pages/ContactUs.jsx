import { BrowserRouter } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import HeroContactUs from "../components/HeroContactUs";
// import Footer from "../components/Footer";

function ContactUs() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <HeroContactUs />
      {/* <Footer /> */}
    </>
  );
}

export default ContactUs;
