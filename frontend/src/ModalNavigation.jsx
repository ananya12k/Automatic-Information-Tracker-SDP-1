import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComp from "./LoginComp";
import LogContinueEm from "./LogContinueEm";
import SignUp from "./SignUp";
import ForgotPassWord from "./ForgotPassWord";
import BackButton from "./BackButton";

const ModalNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginComp open={open} setOpen={setOpen} />} />
        <Route
          path="/login"
          element={<LogContinueEm open={open} setOpen={setOpen} />}
        />
        <Route
          path="/signup"
          element={<SignUp open={open} setOpen={setOpen} />}
        />
        <Route
          path="/forgotpassword"
          element={<ForgotPassWord open={open} setOpen={setOpen} />}
        />
      </Routes>
      <BackButton />
    </Router>
  );
};

export default ModalNavigation;
