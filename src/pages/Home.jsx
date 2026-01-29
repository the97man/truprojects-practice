import { BrowserRouter } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";

export default function Home() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <MainNavbar />
      {/* routes */}
    </BrowserRouter>
  );
}
