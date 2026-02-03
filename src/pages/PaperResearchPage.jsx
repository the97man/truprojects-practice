import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import PaperResearchComp from "../components/PaperResearchComp";

function PaperResearchPage() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <PaperResearchComp />
      <div>
        <h1 className="mt-50 text-black">PAPER RESEARCH</h1>
      </div>
    </>
  );
}

export default PaperResearchPage;
