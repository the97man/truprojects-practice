import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUsPage from "./pages/ContactUsPage";
import MainNavbar from "./components/MainNavbar";
import AboutUsPage from "./pages/AboutUsPage";
import ResearchPaperPage from "./pages/ResearchPaperPage";
import DocumentWritingPage from "./pages/DocumentWritingPage";
import SummerInternshipsPage from "./pages/SummerInternshipsPage";

function App() {
  return (
    <BrowserRouter basename="/truprojects-practice">
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/about-us-page" element={<AboutUsPage />} />
        <Route path="/research-paper-page" element={<ResearchPaperPage />} />
        <Route
          path="/document-writing-page"
          element={<DocumentWritingPage />}
        />
        <Route
          path="/summer-internships-page"
          element={<SummerInternshipsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
