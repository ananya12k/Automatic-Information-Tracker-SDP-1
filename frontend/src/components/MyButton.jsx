import { MDBBtn, MDBTooltip, MDBIcon } from "mdb-react-ui-kit";

const MyButton = () => {
  return (
    <span className="d-flex justify-content-center mt-4">
      <MDBBtn rounded style={{ marginRight: 10 }}>
        <MDBIcon fas icon="upload" style={{ marginRight: 5 }} />
        Upload Documents
      </MDBBtn>
      <MDBTooltip
        tag="span"
        placement="right" // Set an explicit placement for now
        title="Upload the following documents: ID Proof (Aadhar Card, PAN Card, etc.), Proof of Business (Registration Certificate), Photograph of Owner, GST Certificate, FSSAI Certificate"
      >
        {/* Use a descriptive icon for the tooltip trigger */}
        <MDBIcon fas icon="info-circle" />
      </MDBTooltip>
    </span>
  );
};

export default MyButton;
