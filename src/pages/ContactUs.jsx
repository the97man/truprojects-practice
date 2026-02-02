import { BrowserRouter } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import ContactUsForm from "../components/ContactUsForm";

function ContactUs() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <ContactUsForm />
    </>
  );
}

export default ContactUs;
