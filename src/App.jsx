import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ContactUsPage from "./pages/ContactUsPage";
import MainNavbar from "./components/MainNavbar";
import AboutUsPage from "./pages/AboutUsPage";
import ResearchPaperPage from "./pages/ResearchPaperPage";
import DocumentWritingPage from "./pages/DocumentWritingPage";
import SummerInternshipsPage from "./pages/SummerInternshipsPage";
import FinalYearPage from "./pages/FinalYearPage";
import IEEEPage from "./pages/IEEEPage";

import BTechPage from "./pages/BTechPage";
import BTechCSEPage from "./pages/BTechCSEPage";
import BTechECEPage from "./pages/BTechECEPage";

import BTechCSEMajorPage from "./pages/BTechCSEMajorPage";
import BTechCSEMinorPage from "./pages/BTechCSEMinorPage";

import BTechECEMajorPage from "./pages/BTechECEMajorPage";
import BTechECEMinorPage from "./pages/BTechECEMinorPage";

import BTechEEEMajorPage from "./pages/BTechEEEMajorPage";
import BTechEEEMinorPage from "./pages/BTechEEEMinorPage";

import BTechCivilMajorPage from "./pages/BTechCivilMajorPage";
import BTechCivilMinorPage from "./pages/BTechCivilMinorPage";

import BTechMechMajorPage from "./pages/BTechMechMajorPage";
import BTechMechMinorPage from "./pages/BTechMechMinorPage";

import MTechPage from "./pages/MTechPage";
import MTechCSEPage from "./pages/MTechCSEPage";
import MTechECEPage from "./pages/MTechECEPage";

import MTechCSEMajorPage from "./pages/MTechCSEMajorPage";
import MTechCSEMinorPage from "./pages/MTechCSEMinorPage";

import MTechECEMajorPage from "./pages/MTechECEMajorPage";
import MTechECEMinorPage from "./pages/MTechECEMinorPage";

import MTechEEEMajorPage from "./pages/MTechEEEMajorPage";
import MTechEEEMinorPage from "./pages/MTechEEEMinorPage";

import MTechCivilMajorPage from "./pages/MTechCivilMajorPage";
import MTechCivilMinorPage from "./pages/MTechCivilMinorPage";

import MTechMechMajorPage from "./pages/MTechMechMajorPage";
import MTechMechMinorPage from "./pages/MTechMechMinorPage";

import MBAMarketingPage from "./pages/MBAMarketingPage";
import MBAHRPage from "./pages/MBAHRPage";
import MBAFinancePage from "./pages/MBAFinancePage";

import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";

function App() {
  return (
    <BrowserRouter basename="/truprojects-practice">
      <MainNavbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/final-year-projects" element={<FinalYearPage />} />
        <Route path="/ieee-projects" element={<IEEEPage />} />

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

        <Route
          path="/b-tech-page/eee/major-projects"
          element={<BTechEEEMajorPage />}
        />

        <Route
          path="/b-tech-page/eee/minor-projects"
          element={<BTechEEEMinorPage />}
        />

        <Route
          path="/b-tech-page/civil/major-projects"
          element={<BTechCivilMajorPage />}
        />

        <Route
          path="/b-tech-page/civil/minor-projects"
          element={<BTechCivilMinorPage />}
        />

        <Route
          path="/b-tech-page/mechanical/major-projects"
          element={<BTechMechMajorPage />}
        />

        <Route
          path="/b-tech-page/mechanical/minor-projects"
          element={<BTechMechMinorPage />}
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

        <Route
          path="/m-tech-page/eee/major-projects"
          element={<MTechEEEMajorPage />}
        />

        <Route
          path="/m-tech-page/eee/minor-projects"
          element={<MTechEEEMinorPage />}
        />

        <Route
          path="/m-tech-page/civil/major-projects"
          element={<MTechCivilMajorPage />}
        />

        <Route
          path="/m-tech-page/civil/minor-projects"
          element={<MTechCivilMinorPage />}
        />

        <Route
          path="/m-tech-page/mechanical/major-projects"
          element={<MTechMechMajorPage />}
        />

        <Route
          path="/m-tech-page/mechanical/minor-projects"
          element={<MTechMechMinorPage />}
        />

        <Route path="/mba/marketing-projects" element={<MBAMarketingPage />} />
        <Route path="/mba/hr-projects" element={<MBAHRPage />} />
        <Route path="/mba/finance-projects" element={<MBAFinancePage />} />

        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />

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
