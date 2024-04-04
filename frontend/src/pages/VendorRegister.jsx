import MyButton from "../components/MyButton";
import VendorNav from "../components/VendorNav";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useState } from "react";
import HostelVen from "../components/HostelVen";
import HostelPGVen from "../components/HostelPGVen";
import PGVen from "../components/PGVen";
import TiffinVen from "../components/TiffinVen";

const VendorRegister = () => {
  const [hostelPGData, setHostelPGData] = useState(null);

  const [selectedType, setSelectedType] = useState(""); // State to store selected type

  const [hostelData, setHostelData] = useState(null);
  const [tiffinData, setTiffinData] = useState(null);
  const handleTiffinData = (data) => {
    setTiffinData(data);
  };
  const [documents, setDocuments] = useState([]);

  const handleDocumentUpload = (selectedFiles) => {
    setDocuments(selectedFiles);
  };

  const handleDeleteDocument = (index) => {
    const updatedDocuments = [...documents];
    updatedDocuments.splice(index, 1);
    setDocuments(updatedDocuments);
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split(".").pop();
    switch (extension.toLowerCase()) {
      case "pdf":
        return "fa-file-pdf";
      case "docx":
        return "fa-file-word";
      default:
        return "fa-file";
    }
  };

  const handleUploadDocuments = () => {
    // Handle document upload logic here
    console.log("Uploading documents:", documents);
    // Clear documents state after upload if needed
    setDocuments([]);
  };

  // State to store data from HostelVen
  const handleHostelData = (data) => {
    setHostelData(data);
  };

  const handleHostelPGData = (data) => {
    // Handle the data received from HostelPGVen component
    console.log("Hostel/PG data:", data);
    setHostelPGData(data); // Store the data in state
  };

  const handleRadioChange = (e) => {
    // e.preventDefault(); // Prevent default form submission
    setSelectedType(e.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData;
      switch (selectedType) {
        case "hostel":
          formData = {
            name: document.getElementById("form10Example1").value,
            email: document.getElementById("form10Example2").value,
            phoneNumber: document.getElementById("form10Example3").value,
            address: document.getElementById("form10Example4").value,
            type: selectedType, // Include the selectedType in the form data
            hostelData: hostelData,
            hostelPGData: hostelPGData,
            documents: documents.map((file) => ({
              name: file.name,
              type: file.type,
              // Add any other relevant file properties here
            })),
          };
          break;
        case "pg":
          formData = {
            name: document.getElementById("form10Example1").value,
            email: document.getElementById("form10Example2").value,
            phoneNumber: document.getElementById("form10Example3").value,
            address: document.getElementById("form10Example4").value,
            type: selectedType, // Include the selectedType in the form data
            hostelPGData: hostelPGData,
            pgData: {
              depositOptions: getDepositOptions(),
              noticePeriod: getNoticePeriod(),
            },
            documents: documents.map((file) => ({
              name: file.name,
              type: file.type,
              // Add any other relevant file properties here
            })),
          };
          break;
        case "tiffin":
          formData = {
            name: document.getElementById("form10Example1").value,
            email: document.getElementById("form10Example2").value,
            phoneNumber: document.getElementById("form10Example3").value,
            address: document.getElementById("form10Example4").value,
            type: selectedType, // Include the selectedType in the form data
            tiffinData: tiffinData,
            documents: documents.map((file) => ({
              name: file.name,
              type: file.type,
              // Add any other relevant file properties here
            })),
          };
          break;
        default:
          console.error("Invalid vendor type");
          return;
      }

      // Send the form data to the backend
      const response = await fetch("http://127.0.0.1:8000/service/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/vendorprofile"); // Navigate to VendorProfilePage
      } else {
        // Handle error response
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const getDepositOptions = () => {
    const depositOptions = [];
    const rent1 = document.getElementById("radio1Rent").checked;
    const rent2 = document.getElementById("radio2Rent").checked;
    if (rent1) {
      depositOptions.push("1 Rent");
    }
    if (rent2) {
      depositOptions.push("2 Rent");
    }
    return depositOptions;
  };

  // Function to get selected notice period
  const getNoticePeriod = () => {
    const noticePeriodRadioButtons = document.getElementsByName("noticePeriod");
    let selectedNoticePeriod = "";
    noticePeriodRadioButtons.forEach((radioButton) => {
      if (radioButton.checked) {
        selectedNoticePeriod = radioButton.nextSibling.textContent.trim();
      }
    });
    return selectedNoticePeriod;
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
              {selectedType === "hostel" && (
                <HostelVen onHostelData={handleHostelData} />
              )}{" "}
              {/* Show HostelVen component if hostel */}
              {selectedType === "hostel" && (
                <HostelPGVen onHostelPGData={handleHostelPGData} />
              )}{" "}
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
              {selectedType === "pg" && (
                <HostelPGVen onHostelPGData={handleHostelPGData} />
              )}{" "}
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
              {selectedType === "tiffin" && (
                <TiffinVen onTiffinData={handleTiffinData} />
              )}{" "}
              {/* Show TiffinVen component if tiffin */}
            </MDBCol>
          </MDBRow>

          <MyButton onUpload={handleDocumentUpload} />
          <hr />

          {/* Render uploaded documents with previews */}
          {documents.length > 0 && (
            <div>
              <h4>Uploaded Documents:</h4>
              <ul>
                {documents.map((file, index) => (
                  <li key={index}>
                    {/* Check if the file type is an image */}
                    {file.type.startsWith("image/") ? (
                      // If it's an image, display the image preview
                      <>
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Preview ${index}`}
                          style={{ maxWidth: "100px", maxHeight: "100px" }}
                        />
                        <MDBIcon
                          icon="trash-alt"
                          className="ml-2"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleDeleteDocument(index)}
                        />
                      </>
                    ) : (
                      // If it's not an image, display an icon based on the file type
                      <>
                        <i className={`fa ${getFileIcon(file.name)} fa-2x`} />
                        <MDBIcon
                          icon="trash-alt"
                          className="ml-2"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleDeleteDocument(index)}
                        />
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <hr />
          <div className="d-flex justify-content-center mt-4">
            <MDBBtn rounded type="submit">
              Submit
            </MDBBtn>
          </div>
        </form>

        <br />
      </MDBContainer>
    </>
  );
};

export default VendorRegister;
