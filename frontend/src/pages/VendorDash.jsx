import VendorNav from "../components/VendorNav";
import { MDBTypography, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
const VendorDash = () => {
  const navigate = useNavigate();
  const registerBusiness = () => {
    navigate("/vendorreg");
  };
  return (
    <>
      <VendorNav />
      <MDBTypography
        variant="h1"
        style={{ textAlign: "center", marginTop: 30 }}
      >
        Welcome to Vendor’s Portal
      </MDBTypography>
      <center>
        <MDBBtn
          variant="gradient"
          color="info"
          style={{ marginTop: 40 }}
          onClick={registerBusiness}
        >
          Register My Business
        </MDBBtn>
      </center>
    </>
  );
};

export default VendorDash;
