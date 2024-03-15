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
// import NavBarServices from "../components/NavBarServices";

const ContactPage = () => {
  const email = "abc@gmail.com";
  const phone = "123456789";

  return (
    <>
      {/* <NavBarServices /> */}

      <MDBCardGroup>
        <MDBCard className="text-center">
          <MDBCardBody className="d-flex flex-column justify-content-center align-items-center">
            <MDBCardTitle tag="h3">Contact Information</MDBCardTitle>
            <MDBBtn color="primary" className="mb-3 w-50">
              <MDBIcon fas icon="envelope" className="p-2" size="2x" />
              <span
                className="text-center text-lowercase"
                style={{ fontSize: "25px" }}
              >
                {email}
              </span>
            </MDBBtn>

            <MDBBtn color="primary" className="w-50">
              <MDBIcon fas icon="phone" className="p-2 .me-5" size="2x" />
              <span className="text-center" style={{ fontSize: "25px" }}>
                {phone}
              </span>
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="w-50" style={{ height: "95vh" }}>
          <MDBCardBody>
            <MDBCardTitle
              tag="h3"
              className="text-center"
              style={{ marginBottom: "70px" }}
            >
              We'd love to hear from you!
            </MDBCardTitle>
            <center>
              <form id="form" className="text-center" style={{ width: "25vw" }}>
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

                <MDBBtn color="primary" size="lg">
                  Send
                </MDBBtn>
              </form>
            </center>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </>
  );
};

export default ContactPage;
