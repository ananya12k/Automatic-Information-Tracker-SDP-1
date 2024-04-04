import MyButton from "../components/MyButton";
import VendorNav from "../components/VendorNav";

import {
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";
import { useState } from "react";
import HostelVen from "../components/HostelVen";
import HostelPGVen from "../components/HostelPGVen";
import PGVen from "../components/PGVen";
import TiffinVen from "../components/TiffinVen";

const VendorRegister = () => {
  const [selectedType, setSelectedType] = useState(""); // State to store selected type
  const [documents, setDocuments] = useState([]);

  const handleDocumentUpload = (selectedFiles) => {
    setDocuments(selectedFiles);
  };

  const handleUploadDocuments = () => {
    // Handle document upload logic here
    console.log("Uploading documents:", documents);
    // Clear documents state after upload if needed
    setDocuments([]);
  };

  const handleRadioChange = (e) => {
    e.preventDefault(); // Prevent default form submission
    setSelectedType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Handle form submission logic here
  };

  return (
    <>
      <VendorNav />
      <MDBContainer style={{ marginTop: 40 }}>
        <form onSubmit={handleSubmit}>
          <MDBRow>
            <MDBCol>
              <MDBInput id="form10Example1" label="Name" />
            </MDBCol>
            <MDBCol>
              <MDBInput
                id="form10Example2"
                label="Email address"
                type="email"
              />
            </MDBCol>
          </MDBRow>

          <hr />
          <MDBRow>
            <MDBCol>
              <MDBInput id="form10Example3" label="Phone Number" type="tel" />
            </MDBCol>
            <MDBCol>
              <MDBInput id="form10Example4" label="Address" />
            </MDBCol>
          </MDBRow>

          <hr />
          {/* Radio Buttons with conditional rendering */}
          <MDBRow>
            <MDBCol>
              <MDBRadio
                name="inlineRadio"
                id="inlineRadio1"
                value="hostel"
                label="Hostel"
                inline
                checked={selectedType === "hostel"} // Set checked based on state
                onChange={handleRadioChange}
              />
              {selectedType === "hostel" && <HostelVen />}{" "}
              {/* Show HostelVen component if hostel */}
              {selectedType === "hostel" && <HostelPGVen />}{" "}
              {/* Show HostelPGVen component if hostel */}
            </MDBCol>
            <MDBCol>
              <MDBRadio
                name="inlineRadio"
                id="inlineRadio2"
                value="pg"
                label="PG"
                inline
                checked={selectedType === "pg"} // Set checked based on state
                onChange={handleRadioChange}
              />
              {selectedType === "pg" && <PGVen />}{" "}
              {selectedType === "pg" && <HostelPGVen />}{" "}
            </MDBCol>
            <MDBCol>
              <MDBRadio
                name="inlineRadio"
                id="inlineRadio3"
                value="tiffin"
                label="Tiffin Service"
                inline
                checked={selectedType === "tiffin"} // Set checked based on state
                onChange={handleRadioChange}
              />
              {selectedType === "tiffin" && <TiffinVen />}{" "}
              {/* Show TiffinVen component if tiffin */}
            </MDBCol>
          </MDBRow>

          <hr />
          <MyButton onUpload={handleDocumentUpload} />
        </form>

        <br />
      </MDBContainer>
    </>
  );
};

export default VendorRegister;
