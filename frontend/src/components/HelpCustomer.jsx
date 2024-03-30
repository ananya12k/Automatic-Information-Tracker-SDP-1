import { useNavigate } from "react-router-dom";
import { MDBIcon, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";

export default function HelpCustomer() {
  const navigate = useNavigate();

  const goToCustomerSupport = () => {
    navigate("/customerSup");
  };

  const goToBusinessSupport = () => {
    navigate("/businessSup");
  };

  return (
    <MDBListGroup style={{ minWidth: "22rem", margin: "20px" }} light>
      <MDBListGroupItem
        onClick={goToBusinessSupport}
        noBorders
        color="primary"
        className="px-3 mb-2 rounded-3 fs-4"
        style={{ marginBottom: "20px" }}
      >
        <MDBIcon fas icon="briefcase" size="1x" className="p-2" />I am a
        Business Owner
        <span
          style={{ position: "absolute", right: "0px", paddingRight: "10px" }}
        >
          <MDBIcon fas icon="greater-than" size="1x" />
        </span>
      </MDBListGroupItem>
      <MDBListGroupItem
        onClick={goToCustomerSupport}
        noBorders
        color="primary"
        className="px-3 mb-2 rounded-3 fs-4"
      >
        <MDBIcon fas icon="user-alt" size="1x" className="p-2" />I am a User
        <span
          style={{ position: "absolute", right: "0px", paddingRight: "10px" }}
        >
          <MDBIcon fas icon="greater-than" size="1x" />
        </span>
      </MDBListGroupItem>
    </MDBListGroup>
  );
}
