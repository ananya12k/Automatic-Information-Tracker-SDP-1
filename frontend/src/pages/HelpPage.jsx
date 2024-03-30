import NavBarHelp from "../components/NavbarHelp";
import HelpCustomer from "../components/HelpCustomer";

const HelpPage = () => {
  return (
    <>
      <NavBarHelp />

      <p className="text-center fs-2" style={{ marginTop: "20px" }}>
        Choose Type
      </p>
      <p className="text-center fs-4">
        Don't worry! we will help you to solve problem
      </p>

      <HelpCustomer />
    </>
  );
};

export default HelpPage;
