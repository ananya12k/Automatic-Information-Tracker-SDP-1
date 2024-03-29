import { useState } from "react";
import PropTypes from "prop-types";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBTooltip,
} from "mdb-react-ui-kit";

// Reusable CheckboxGroup component
const CheckboxGroup = ({ options, label, selectedValues, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="checkbox"
            id={option.value}
            name={option.value}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={onChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

CheckboxGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  selectedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

const VendorRegister = () => {
  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [roomTypes, setRoomTypes] = useState([]);
  const [priceRange, setPriceRange] = useState(0);
  const [amenities, setAmenities] = useState("");
  const [inTime, setInTime] = useState("");
  const [rulesAndRegulations, setRulesAndRegulations] = useState("");
  const [sharedRooms, setSharedRooms] = useState("");
  const [roommates, setRoommates] = useState([]);
  const [partnerWithUs, setPartnerWithUs] = useState("");
  const [wardenPresent, setWardenPresent] = useState("");
  const [wardensCount, setWardensCount] = useState("");
  const [foodIncluded, setFoodIncluded] = useState("");
  const [forGender, setForGender] = useState("");
  const [security24x7, setSecurity24x7] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [pickupDropService, setPickupDropService] = useState("");
  const [uploadPhotos, setUploadPhotos] = useState("");
  const [interiorPhotos, setInteriorPhotos] = useState("");
  const [exteriorPhotos, setExteriorPhotos] = useState("");
  const [documentsUpload, setDocumentsUpload] = useState("");

  // Handle room type change
  const handleRoomTypeChange = (e) => {
    const selectedTypes = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRoomTypes(selectedTypes);
  };

  // Handle roommate change
  const handleRoommateChange = (e) => {
    const selectedRoommates = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRoommates(selectedRoommates);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <MDBContainer className="mt-5">
      <h1>Upload Details</h1>
      <form onSubmit={handleSubmit}>
        {/* Input fields */}
        <MDBRow className="mb-3">
          <MDBCol>
            <label htmlFor="name">Name</label>
            <MDBInput
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <label htmlFor="email">Email</label>
            <MDBInput
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol>
            <label htmlFor="phone">Phone</label>
            <MDBInput
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <label htmlFor="address">Address</label>
            <MDBInput
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol>
            <label htmlFor="roomTypes">Types of Room available</label>
            <MDBInput
              id="roomTypes"
              type="select"
              multiple
              value={roomTypes}
              onChange={handleRoomTypeChange}
            >
              <option value="ac">AC</option>
              <option value="nonAc">Non AC</option>
            </MDBInput>
          </MDBCol>
          <MDBCol>
            <label htmlFor="priceRange">Price Range</label>
            <MDBInput
              id="priceRange"
              type="range"
              min="100"
              max="5000"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol>
            <label htmlFor="amenities">Amenities</label>
            <MDBInput
              id="amenities"
              type="text"
              value={amenities}
              onChange={(e) => setAmenities(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <label htmlFor="inTime">In-Time</label>
            <MDBInput
              id="inTime"
              type="time"
              value={inTime}
              onChange={(e) => setInTime(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol>
            <label htmlFor="rulesAndRegulations">Rules and Regulations</label>
            <MDBInput
              id="rulesAndRegulations"
              type="textarea"
              rows="4"
              value={rulesAndRegulations}
              onChange={(e) => setRulesAndRegulations(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <label htmlFor="sharedRooms">Shared Rooms</label>
            <MDBInput
              id="sharedRooms"
              value={sharedRooms}
              type="select"
              onChange={(e) => setSharedRooms(e.target.value)}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </MDBInput>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol>
            <label htmlFor="roommates">No of Roommates</label>
            <MDBInput
              id="roommates"
              multiple
              value={roommates}
              onChange={handleRoommateChange}
            >
              {[...Array(11).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </MDBInput>
          </MDBCol>
          <MDBCol>
            <label htmlFor="partnerWithUs">Do you partner with us?</label>
            <MDBInput
              id="partnerWithUs"
              type="select"
              value={partnerWithUs}
              onChange={(e) => setPartnerWithUs(e.target.value)}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </MDBInput>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol>
            <label htmlFor="wardenPresent">Warden present</label>
            <MDBInput
              id="wardenPresent"
              value={wardenPresent}
              type="select"
              onChange={(e) => setWardenPresent(e.target.value)}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </MDBInput>
          </MDBCol>
          <MDBCol>
            <label htmlFor="wardensCount">No of Wardens present</label>
            <MDBInput
              id="wardensCount"
              type="text"
              value={wardensCount}
              onChange={(e) => setWardensCount(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol>
            <label htmlFor="foodIncluded">Food included?</label>
            <MDBInput
              id="foodIncluded"
              value={foodIncluded}
              type="select"
              onChange={(e) => setFoodIncluded(e.target.value)}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </MDBInput>
          </MDBCol>
          <MDBCol>
            <label htmlFor="forGender">For</label>
            <MDBInput
              id="forGender"
              value={forGender}
              type="select"
              onChange={(e) => setForGender(e.target.value)}
            >
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
              <option value="both">Both</option>
            </MDBInput>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol>
            <label htmlFor="security24x7">Security (24/7)</label>
            <MDBInput
              id="security24x7"
              value={security24x7}
              type="select"
              onChange={(e) => setSecurity24x7(e.target.value)}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </MDBInput>
          </MDBCol>
          <MDBCol>
            <label htmlFor="longitude">
              Longitude <MDBTooltip content="Tooltip text here" />
            </label>
            <MDBInput
              id="longitude"
              type="text"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol>
            <label htmlFor="latitude">
              Latitude <MDBTooltip content="Tooltip text here" />
            </label>
            <MDBInput
              id="latitude"
              type="text"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <label htmlFor="pickupDropService">Pickup and drop service?</label>
            <MDBInput
              id="pickupDropService"
              value={pickupDropService}
              onChange={(e) => setPickupDropService(e.target.value)}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </MDBInput>
          </MDBCol>
        </MDBRow>
        {/* Add conditional rendering for tiffin service fields */}
        {/* Add upload buttons */}
        <MDBBtn type="submit" color="primary">
          Submit Details
        </MDBBtn>
      </form>
    </MDBContainer>
  );
};

export default VendorRegister;
