import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
  MDBBtn,
} from "mdb-react-ui-kit";
import HostelVen from "../components/HostelVen";
import HostelPGVen from "../components/HostelPGVen";
import TiffinVen from "../components/TiffinVen";

const VendorRegister = () => {
  const [selectedType, setSelectedType] = useState("");
  const [hostelData, setHostelData] = useState(null);
  const [hostelPGData, setHostelPGData] = useState(null);
  const [tiffinData, setTiffinData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Construct formData based on selectedType
    let formData = {
      name: document.getElementById("form10Example1").value,
      email: document.getElementById("form10Example2").value,
      phone: document.getElementById("form10Example3").value,
      address: document.getElementById("form10Example4").value,
      type_of_business: selectedType,
    };

    if (selectedType === "H") {
      formData = { ...formData, ...hostelData };
    } else if (selectedType === "Pg") {
      formData = { ...formData, ...hostelPGData };
    } else if (selectedType === "T") {
      formData = { ...formData, ...tiffinData };
    }

    // Send formData to the backend
    try {
      const response = await fetch("http://127.0.0.1:8000/service/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/vendorprofile");
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <MDBContainer style={{ marginTop: 40 }}>
      <form onSubmit={handleSubmit}>
        <MDBRow>
          <MDBCol>
            <MDBInput id="form10Example1" label="Name" />
          </MDBCol>
          <MDBCol>
            <MDBInput id="form10Example2" label="Email address" type="email" />
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
        <MDBRow>
          <MDBCol>
            <MDBRadio
              name="businessType"
              id="hostel"
              value="H"
              label="Hostel"
              inline
              checked={selectedType === "H"}
              onChange={(e) => setSelectedType(e.target.value)}
            />
            {selectedType === "H" && <HostelVen onHostelData={setHostelData} />}
          </MDBCol>
          <MDBCol>
            <MDBRadio
              name="businessType"
              id="pg"
              value="Pg"
              label="PG"
              inline
              checked={selectedType === "Pg"}
              onChange={(e) => setSelectedType(e.target.value)}
            />
            {selectedType === "Pg" && (
              <HostelPGVen onHostelPGData={setHostelPGData} />
            )}
          </MDBCol>
          <MDBCol>
            <MDBRadio
              name="businessType"
              id="tiffin"
              value="T"
              label="Tiffin Service"
              inline
              checked={selectedType === "T"}
              onChange={(e) => setSelectedType(e.target.value)}
            />
            {selectedType === "T" && <TiffinVen onTiffinData={setTiffinData} />}
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBBtn rounded type="submit">
          Submit
        </MDBBtn>
      </form>
    </MDBContainer>
  );
};

export default VendorRegister;
