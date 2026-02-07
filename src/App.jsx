import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUsPage from "./pages/ContactUsPage";
import MainNavbar from "./components/MainNavbar";
import AboutUsPage from "./pages/AboutUsPage";
import ResearchPaperPage from "./pages/ResearchPaperPage";
import DocumentWritingPage from "./pages/DocumentWritingPage";
import SummerInternshipsPage from "./pages/SummerInternshipsPage";

import BTechPage from "./pages/BTechPage";
import BTechCSEPage from "./pages/BTechCSEPage";
import BTechECEPage from "./pages/BTechECEPage";
import BTechCSEMajorPage from "./pages/BTechCSEMajorPage";
import BTechCSEMinorPage from "./pages/BTechCSEMinorPage";
import BTechECEMajorPage from "./pages/BTechECEMajorPage";
import BTechECEMinorPage from "./pages/BTechECEMinorPage";

import MTechPage from "./pages/MTechPage";
import MTechCSEPage from "./pages/MTechCSEPage";
import MTechECEPage from "./pages/MTechECEPage";
import MTechCSEMajorPage from "./pages/MTechCSEMajorPage";
import MTechCSEMinorPage from "./pages/MTechCSEMinorPage";
import MTechECEMajorPage from "./pages/MTechECEMajorPage";
import MTechECEMinorPage from "./pages/MTechECEMinorPage";

function App() {
  return (
    <BrowserRouter basename="/truprojects-practice">
      <MainNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/about-us-page" element={<AboutUsPage />} />

        <Route path="/b-tech-page" element={<BTechPage />} />
        <Route path="/b-tech-page/cse" element={<BTechCSEPage />} />
        <Route path="/b-tech-page/ece" element={<BTechECEPage />} />

        <Route
          path="/b-tech-page/cse/major-projects"
          element={<BTechCSEMajorPage />}
        />

        <Route
          path="/b-tech-page/cse/minor-projects"
          element={<BTechCSEMinorPage />}
        />

        <Route
          path="/b-tech-page/ece/major-projects"
          element={<BTechECEMajorPage />}
        />

        <Route
          path="/b-tech-page/ece/minor-projects"
          element={<BTechECEMinorPage />}
        />

        <Route path="/m-tech-page" element={<MTechPage />} />
        <Route path="/m-tech-page/cse" element={<MTechCSEPage />} />
        <Route path="/m-tech-page/ece" element={<MTechECEPage />} />

        <Route
          path="/m-tech-page/cse/major-projects"
          element={<MTechCSEMajorPage />}
        />

        <Route
          path="/m-tech-page/cse/minor-projects"
          element={<MTechCSEMinorPage />}
        />

        <Route
          path="/m-tech-page/ece/major-projects"
          element={<MTechECEMajorPage />}
        />

        <Route
          path="/m-tech-page/ece/minor-projects"
          element={<MTechECEMinorPage />}
        />

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
