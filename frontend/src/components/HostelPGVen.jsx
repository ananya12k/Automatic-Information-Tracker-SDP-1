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

const HostelPGVen = () => {
  const [sharedRooms, setSharedRooms] = useState(false);
  const [roommates, setRoommates] = useState([]);
  const [acRoom, setAcRoom] = useState(false);
  const [foodIncluded, setFoodIncluded] = useState(false);
  const [prices, setPrices] = useState([]);
  const [selectedCombination, setSelectedCombination] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

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

  return (
    <>
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          {sharedRooms ? "Shared Rooms" : "Individual Rooms"}
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem onClick={() => setSharedRooms(false)}>
            Individual Rooms
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => setSharedRooms(true)}>
            Shared Rooms
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      {sharedRooms && (
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
        </div>
      )}

      <MDBCheckbox
        label="AC Room"
        id="acRoom"
        checked={acRoom}
        onChange={() => setAcRoom(!acRoom)}
      />

      <MDBInput
        type="text"
        label="Enter Price (₹)"
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
      />
      <MDBBtn color="primary" onClick={handleAddPrice}>
        Add Price
      </MDBBtn>

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
        <MDBDropdownToggle caret color="primary">
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

      <MDBCheckbox
        label="Food Included"
        id="foodIncluded"
        checked={foodIncluded}
        onChange={() => setFoodIncluded(!foodIncluded)}
      />

      <MDBInput type="textarea" label="Rules and Regulations" />

      <MDBInput type="time" label="In-Time" />

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
        <MDBCheckbox label={amenity} id={amenity} key={amenity} />
      ))}

      <MDBCheckbox label="Pick and Drop" id="pickAndDrop" />
      <MDBCheckbox label="Police Verification" id="policeVerification" />

      <MDBBtn color="primary">
        <MDBIcon fas icon="upload" /> Upload Images
      </MDBBtn>

      <MDBInput type="text" label="Longitude" />
      <MDBInput type="text" label="Latitude" />
    </>
  );
};

export default HostelPGVen;
