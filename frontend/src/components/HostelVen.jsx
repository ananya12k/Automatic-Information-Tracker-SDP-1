import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useState } from "react";
const HostelVen = () => {
  const [wardenPresent, setWardenPresent] = useState(false);
  const [wardenCount, setWardenCount] = useState(0);
  return (
    <>
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
        <MDBDropdownToggle caret>Warden Present</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem onClick={() => setWardenPresent(true)}>
            Yes
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => setWardenPresent(false)}>
            No
          </MDBDropdownItem>
        </MDBDropdownMenu>
        {wardenPresent && (
          <input
            type="number"
            placeholder="Number of wardens"
            onChange={(e) => setWardenCount(e.target.value)}
          />
        )}
      </MDBDropdown>
      <hr />
    </>
  );
};

export default HostelVen;
