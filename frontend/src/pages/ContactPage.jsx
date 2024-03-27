import {
 MDBCard,
 MDBCardTitle,
 MDBBtn,
 MDBCardGroup,
 MDBCardBody,
 MDBIcon,
 MDBInput,
 MDBTextArea,
} from "mdb-react-ui-kit";
import NavBarServices from "../components/NavBarServices";

const ContactPage = () => {
 const email = "abc@gmail.com";
 const phone = "123456789";

 return (
    <>
      <NavBarServices />

      <MDBCardGroup className="mb-5">
        <MDBCard className="text-center">
          <MDBCardBody className="d-flex flex-column justify-content-center align-items-center">
            <MDBCardTitle tag="h3" className="mb-4">Contact Information</MDBCardTitle>
            <MDBBtn color="primary" className="mb-3 w-50">
              <MDBIcon fas icon="envelope" className="p-2" size="2x" />
              <span className="text-center text-lowercase" style={{ fontSize: "25px" }}>
                {email}
              </span>
            </MDBBtn>

            <MDBBtn color="primary" className="w-50">
              <MDBIcon fas icon="phone" className="p-2" size="2x" />
              <span className="text-center" style={{ fontSize: "25px" }}>
                {phone}
              </span>
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="w-50" style={{ height: "95vh" }}>
          <MDBCardBody>
            <MDBCardTitle tag="h3" className="text-center mb-4">
              We'd love to hear from you!
            </MDBCardTitle>
            <form id="form" className="text-center" style={{ width: "25vw", margin: "0 auto" }}>
              <h4 className="text-start">Full Name</h4>
              <MDBInput
                className="form-control mb-3"
                type="text"
                placeholder="Recipient's Full Name"
              />

              <h4 className="text-start">Email</h4>
              <MDBInput
                className="form-control mb-3"
                type="text"
                placeholder="Recipient's Email"
              />

              <h4 className="text-start">Message</h4>
              <MDBTextArea
                className="form-control mb-3"
                type="text"
                placeholder="Recipient's Message"
              />

              <MDBBtn color="primary" size="lg" className="w-100">
                Send
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </>
 );
};

export default ContactPage;
