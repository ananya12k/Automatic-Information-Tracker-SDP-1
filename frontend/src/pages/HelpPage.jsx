import HelpSearch from "../components/HelpSearch";
import NavBarHelp from "../components/NavbarHelp";
import HelpCustomer from "../components/HelpCustomer";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

const HelpPage = () => {
  return (
    <>
      <NavBarHelp />

      <p className="text-center fs-2" style={{ marginTop: "20px" }}>Choose Type</p>
      <p className="text-center fs-4">Don't worry! we will help you to solve problem</p>

      <HelpCustomer />

    </>
  );
};

export default HelpPage;
