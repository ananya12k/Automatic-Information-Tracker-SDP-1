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

  const handleSubmit = (e) => {
    e.preventDefault();
    const hostelPGData = {
      documents,
      sharedRooms,
      roommates,
      acRoom,
      foodIncluded,
      prices,
      // Add other data properties as needed
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
      <MDBBtn rounded color="primary" onClick={handleSubmit}>
        Add Hostel/PG Details
      </MDBBtn>
    </>
  );
};

HostelPGVen.propTypes = {
  onHostelPGData: PropTypes.func.isRequired,
};

export default HostelPGVen;
