import { useState } from "react";
import {
  MDBBtn,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import PropTypes from "prop-types";

const HostelPGVen = ({ onHostelPGData }) => {
  const [documents, setDocuments] = useState([]);
  const [sharedRooms, setSharedRooms] = useState(false);
  const [roommates, setRoommates] = useState([]);
  const [acRoom, setAcRoom] = useState(false);
  const [foodIncluded, setFoodIncluded] = useState(false);
  const [prices, setPrices] = useState([]);
  const [selectedCombination, setSelectedCombination] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [amenities, setAmenities] = useState([]);
  const handleDocumentUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const filteredFiles = selectedFiles.filter((file) => {
      const fileType = file.type;
      return (
        fileType === "image/jpeg" ||
        fileType === "image/jpg" ||
        fileType === "image/png"
      );
    });
    setDocuments((prevDocuments) => [...prevDocuments, ...filteredFiles]);
  };

  const handleDeleteDocument = (index) => {
    setDocuments((prevDocuments) =>
      prevDocuments.filter((_, i) => i !== index)
    );
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

  const handleSharedRoomsChange = () => {
    setSharedRooms(!sharedRooms);
  };

  const handleRoommatesChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setRoommates([...roommates, value]);
    } else {
      setRoommates(roommates.filter((roommate) => roommate !== value));
    }
  };

  const generateCombinations = () => {
    const combinations = [];
    if (sharedRooms) {
      roommates.forEach((num) => {
        combinations.push(`Shared - ${num} Roommates`);
      });
    } else {
      combinations.push("Individual Rooms");
    }
    if (acRoom) {
      combinations.forEach((combination, index) => {
        combinations[index] = `${combination} - AC`;
      });
    } else {
      combinations.forEach((combination, index) => {
        combinations[index] = `${combination} - Non-AC`;
      });
    }
    return combinations;
  };

  const handleAddPrice = () => {
    if (selectedCombination && selectedPrice) {
      setPrices([
        ...prices,
        { combination: selectedCombination, price: selectedPrice },
      ]);
      setSelectedCombination("");
      setSelectedPrice("");
    }
  };
  const handleAmenityChange = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setAmenities((prevAmenities) => [...prevAmenities, id]);
    } else {
      setAmenities((prevAmenities) =>
        prevAmenities.filter((amenity) => amenity !== id)
      );
    }
  };

  // const getSelectedAmenities = () => {
  //   const selectedAmenities = [];
  //   const amenityCheckboxes = document.querySelectorAll(
  //     'input[type="checkbox"][id^="amenity"]'
  //   );
  //   amenityCheckboxes.forEach((checkbox) => {
  //     if (checkbox.checked) {
  //       selectedAmenities.push(checkbox.id.substring(7)); // Remove "amenity" prefix
  //     }
  //   });
  //   return selectedAmenities;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hostelPGData = {
      documents,
      sharedRooms,
      roommates,
      acRoom,
      foodIncluded,
      prices,
      longitude: document.getElementById("longitude").value,
      latitude: document.getElementById("latitude").value,
      amenities, // Include selected amenities
      rulesAndRegulations: document.getElementById("rulesAndRegulations").value,
      inTime: document.getElementById("inTime").value,
      pickAndDrop: document.getElementById("pickAndDrop").checked,
      policeVerification: document.getElementById("policeVerification").checked,
      // Add photos property
      photos: documents
        .filter((file) => file.type.startsWith("image/"))
        .map((file) => URL.createObjectURL(file)),
      // Include other properties as needed
    };
    onHostelPGData(hostelPGData);
  };

  return (
    <>
      <hr />
      <MDBDropdown>
        <MDBDropdownToggle caret={true.toString()} color="primary">
          {sharedRooms ? "Shared Rooms" : "Individual Rooms"}
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem onClick={handleSharedRoomsChange}>
            {sharedRooms ? "Individual Rooms" : "Shared Rooms"}
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <hr />
      {!sharedRooms ? (
        <div>
          <p>No shared rooms are available.</p>
        </div>
      ) : (
        <div>
          <h4>Select Number of Roommates:</h4>
          {[2, 3, 4, 5, 6].map((num) => (
            <MDBCheckbox
              key={num}
              label={`Roommates: ${num}`}
              id={`roommates${num}`}
              value={num}
              checked={roommates.includes(num.toString())}
              onChange={handleRoommatesChange}
            />
          ))}
          <hr />
        </div>
      )}
      <MDBCheckbox
        label="AC Room"
        id="acRoom"
        checked={acRoom}
        onChange={() => setAcRoom(!acRoom)}
      />
      <hr />
      <MDBInput
        type="text"
        label="Enter Price (₹)"
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
      />
      <hr />
      <MDBBtn color="primary" onClick={handleAddPrice}>
        Add Price
      </MDBBtn>
      <hr />
      {prices.length > 0 && (
        <div>
          <h4>Prices:</h4>
          {prices.map(({ combination, price }, index) => (
            <div key={index}>
              {`Combination: ${combination}, Price: ₹${price}`}
            </div>
          ))}
        </div>
      )}
      <MDBDropdown>
        <MDBDropdownToggle caret={true.toString()} color="primary">
          {selectedCombination || "Select Combination"}
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          {generateCombinations().map((combination, index) => (
            <MDBDropdownItem
              key={index}
              onClick={() => setSelectedCombination(combination)}
            >
              {combination}
            </MDBDropdownItem>
          ))}
        </MDBDropdownMenu>
      </MDBDropdown>
      <hr />
      <MDBCheckbox
        label="Food Included"
        id="foodIncluded"
        checked={foodIncluded}
        onChange={() => setFoodIncluded(!foodIncluded)}
      />
      <hr />
      <MDBInput
        type="textarea"
        label="Rules and Regulations"
        id="rulesAndRegulations"
      />
      <hr />
      In-Time: <MDBInput type="time" id="inTime" />
      <hr />
      <h4>Select Amenities:</h4>
      {[
        "Wifi",
        "Laundry",
        "Housekeeping",
        "Security",
        "Parking",
        "Gym",
        "Swimming Pool",
        "Power Backup",
        "Water Supply",
        "Elevator",
        "CCTV",
        "Fire Safety",
        "Study Table",
        "Bed",
        "Cupboard",
        "Attached Bathroom",
        "Hot Water",
        "Geyser",
        "TV",
        "Refrigerator",
        "Microwave",
        "Kitchen",
      ].map((amenity) => (
        <MDBCheckbox
          label={amenity}
          id={`${amenity}`}
          key={amenity}
          onChange={handleAmenityChange}
        />
      ))}
      <MDBCheckbox label="Pick and Drop" id="pickAndDrop" />
      <MDBCheckbox label="Police Verification" id="policeVerification" />
      <hr />
      <MDBBtn
        color="primary"
        onClick={() => {
          document.getElementById("documentUpload").click();
        }}
      >
        <MDBIcon fas icon="upload" /> Upload Images
      </MDBBtn>
      {/* Input element for file upload */}
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .pdf, .docx"
        multiple
        onChange={handleDocumentUpload}
        style={{ display: "none" }}
        id="documentUpload"
      />
      <hr />
      {documents.length > 0 && (
        <div>
          <h4>Uploaded Photos:</h4>
          <ul>
            {documents.map((file, index) => (
              <li key={index}>
                {/* Check if the file type is an image */}
                {file.type.startsWith("image/") ? (
                  // If it's an image, display the image preview
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index}`}
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                    <MDBIcon
                      far
                      icon="trash-alt"
                      className="ml-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteDocument(index)}
                    />
                  </div>
                ) : (
                  // If it's not an image, display an icon based on the file type
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i
                      className={`fa ${getFileIcon(file.name)} fa-2x`}
                      style={{ marginRight: "10px" }}
                    />
                    <span>{file.name}</span>
                    <MDBIcon
                      far
                      icon="trash-alt"
                      className="ml-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteDocument(index)}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      <hr />
      <MDBInput type="text" label="Longitude" id="longitude" />
      <hr />
      <MDBInput type="text" label="Latitude" id="latitude" />
      <hr />
      <MDBBtn rounded color="primary" onClick={handleSubmit}>
        Add Hostel/PG Details
      </MDBBtn>
      <hr />
    </>
  );
};

HostelPGVen.propTypes = {
  onHostelPGData: PropTypes.func.isRequired,
};

export default HostelPGVen;
