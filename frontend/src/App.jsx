import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PGBoys from "./pages/PGBoys";
import PGGirls from "./pages/PGGirls";
import HostelBoys from "./pages/HostelBoys";
import HostelGirls from "./pages/HostelGirls";
import TiffinSer from "./pages/TiffinSer";
import ContactPage from "./pages/ContactPage";
import HelpPage from "./pages/HelpPage";
import CustomerSupport from "./pages/CustomerSupport";
import BusinessSupport from "./pages/BusinessSupport";
import WelcomeSignUp from "./pages/login/WelcomeSignUp";
import EmailLogin from "./pages/login/EmailLogin";
import ForgotPassword from "./pages/login/ForgotPassword";
import SignUp from "./pages/login/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/customerSup" element={<CustomerSupport />} />
          <Route path="/businessSup" element={<BusinessSupport />} />
          <Route path="/pgboys" element={<PGBoys />} />
          <Route path="/pggirls" element={<PGGirls />} />
          <Route path="/hostelboys" element={<HostelBoys />} />
          <Route path="/hostelgirls" element={<HostelGirls />} />
          <Route path="/tiffin" element={<TiffinSer />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/welcome" element={<WelcomeSignUp />} />
          <Route path="/login" element={<EmailLogin />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
