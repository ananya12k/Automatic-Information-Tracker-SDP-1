import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PGBoys from "./pages/PGBoys";
import PGGirls from "./pages/PGGirls";
import HostelBoys from "./pages/HostelBoys";
import HostelGirls from "./pages/HostelGirls";
import TiffinSer from "./pages/TiffinSer";
import ContactPage from "./pages/ContactPage";
import HelpPage from "./pages/HelpPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pgboys" element={<PGBoys />} />
          <Route path="/pggirls" element={<PGGirls />} />
          <Route path="/hostelboys" element={<HostelBoys />} />
          <Route path="/hostelgirls" element={<HostelGirls />} />
          <Route path="/tiffin" element={<TiffinSer />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
