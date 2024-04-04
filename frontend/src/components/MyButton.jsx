import { useState } from "react";
import { MDBBtn, MDBTooltip, MDBIcon } from "mdb-react-ui-kit";

const MyButton = ({ onUpload }) => {
  const [documents, setDocuments] = useState([]);

  const handleDocumentUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setDocuments(selectedFiles);
    onUpload(selectedFiles); // Invoke the onUpload callback with selected files
  };

  return (
    <span className="d-flex justify-content-center mt-4">
      <MDBBtn rounded style={{ marginRight: 10 }}>
        <label htmlFor="documentUpload" style={{ cursor: "pointer" }}>
          <MDBIcon fas icon="upload" style={{ marginRight: 5 }} />
          Upload Documents
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .pdf, .docx"
            multiple
            onChange={handleDocumentUpload}
            style={{ display: "none" }}
            id="documentUpload"
          />
        </label>
      </MDBBtn>
      <MDBTooltip
        tag="span"
        placement="right"
        title="Upload the following documents: ID Proof (Aadhar Card, PAN Card, etc.), Proof of Business (Registration Certificate), Photograph of Owner, GST Certificate, FSSAI Certificate"
      >
        <MDBIcon fas icon="info-circle" />
      </MDBTooltip>
    </span>
  );
};

export default MyButton;
