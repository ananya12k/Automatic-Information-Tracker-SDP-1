import { MDBRadio, MDBBtn, MDBIcon, MDBTooltip } from "mdb-react-ui-kit";
const TiffinVen = () => {
  return (
    <>
      <h5>Vegetarian</h5>
      <MDBRadio name="veg" id="Veg" label="Yes" inline />
      <MDBRadio name="veg" id="NonVeg" label="No" inline />
      <hr />
      <h5>Delivery</h5>
      <MDBRadio name="delivery" id="delivery1" label="Yes" inline />
      <MDBRadio name="delivery" id="delivery2" label="No" inline />
      <span className="d-flex justify-content-center mt-4">
        <MDBBtn rounded style={{ marginRight: 10 }}>
          <MDBIcon fas icon="upload" style={{ marginRight: 5 }} />
          Upload Menu
        </MDBBtn>
        <MDBTooltip
          tag="span"
          placement="right" // Set an explicit placement for now
          title="Upload the weekly menu with quantity, price, and delivery timings"
        >
          {/* Use a descriptive icon for the tooltip trigger */}
          <MDBIcon fas icon="info-circle" />
        </MDBTooltip>
      </span>
    </>
  );
};

export default TiffinVen;
