import { MDBContainer, MDBRadio } from "mdb-react-ui-kit";

const RadioButtons = () => {
  return (
    <MDBContainer>
      <h5>Deposit Options</h5>
      <div className="d-flex align-items-center">
        <MDBRadio name="rent" id="radio1Rent" label="1 Rent" inline />
        <MDBRadio
          name="rent"
          id="radio2Rent"
          label="2 Rent"
          inline
          className="mx-2"
        />
      </div>

      <h5>Notice Period</h5>
      {/* Notice Period Radio Buttons */}
      <div className="d-flex align-items-center mt-3">
        <MDBRadio
          name="noticePeriod" // Use separate name for notice period group
          id="radio1Month"
          label="1 Month"
          inline
        />
        <MDBRadio
          name="noticePeriod" // Use separate name for notice period group
          id="radio2Month"
          label="2 Month"
          inline
          className="mx-2"
        />
      </div>
    </MDBContainer>
  );
};

export default RadioButtons;
