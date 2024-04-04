import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useState } from "react";
import PropTypes from "prop-types";

const HostelVen = (props) => {
  const [wardenPresent, setWardenPresent] = useState(false);
  const [wardenCount, setWardenCount] = useState(0);

  const getTimePeriod = () => {
    const timePeriodCheckboxes = document.getElementsByName("inlineCheck");
    const selectedTimePeriod = [];
    timePeriodCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedTimePeriod.push(checkbox.nextSibling.textContent.trim());
      }
    });
    return selectedTimePeriod;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onHostelData({
      timePeriod: getTimePeriod(),
      wardenPresent: wardenPresent,
      wardenCount: wardenCount,
    });
  };

  const handleWardenToggle = () => {
    setWardenPresent(!wardenPresent);
  };

  const handleWardenSelection = (value) => {
    setWardenPresent(value === "Yes");
  };

  const handleWardenCountChange = (e) => {
    setWardenCount(e.target.value);
  };
  return (
    <>
      <hr />
      {/* Create checkboxes of Time period for 1 month, 3 months, 6 months, 1 year in one line */}
      <MDBCheckbox
        name="inlineCheck"
        id="inlineCheckbox1"
        value="option1"
        label="1 month"
        inline
      />
      <MDBCheckbox
        name="inlineCheck"
        id="inlineCheckbox2"
        value="option2"
        label="3 months"
        inline
      />
      <MDBCheckbox
        name="inlineCheck"
        id="inlineCheckbox3"
        value="option3"
        label="6 months"
        inline
      />
      <MDBCheckbox
        name="inlineCheck"
        id="inlineCheckbox4"
        value="option4"
        label="1 year"
        inline
      />
      <hr />

      {/* Create drop down of Warden present yes or no  on conditional rendering if yes the input for no of warden is selected*/}
      <MDBDropdown>
        <MDBDropdownToggle caret={true.toString()} color="primary">
          Warden Present
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem onClick={() => handleWardenSelection("Yes")}>
            Yes
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => handleWardenSelection("No")}>
            No
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      {/* Render input for number of wardens if wardenPresent is true */}
      {wardenPresent && (
        <input
          type="number"
          placeholder="Number of wardens"
          value={wardenCount}
          onChange={handleWardenCountChange}
        />
      )}

      {/* Render content below the dropdown when "No" is selected */}
      {!wardenPresent && (
        <div>
          {/* Add content here to be displayed when "No" is selected */}
          <p>No warden is present.</p>
        </div>
      )}
      <hr />
      <MDBBtn rounded onClick={handleSubmit}>
        Add Warden Details
      </MDBBtn>
    </>
  );
};
HostelVen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  // Other propTypes...
};
HostelVen.propTypes = {
  onHostelData: PropTypes.func.isRequired, // Validate onHostelData prop as a function
};
export default HostelVen;
