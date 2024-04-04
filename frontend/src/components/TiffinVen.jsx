import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { MDBBtn, MDBIcon, MDBTooltip, MDBRadio } from "mdb-react-ui-kit";

const TiffinVen = ({ onTiffinData }) => {
  // Step 1: Define onTiffinData prop
  const [menu, setMenu] = useState(null);
  const [menuPreview, setMenuPreview] = useState(null);
  const [isVegetarian, setIsVegetarian] = useState(null);
  const [isDeliveryAvailable, setIsDeliveryAvailable] = useState(null);

  const handleMenuUpload = (e) => {
    const selectedFile = e.target.files[0];
    setMenu(selectedFile);
    setMenuPreview(URL.createObjectURL(selectedFile));
  };

  const handleDeleteMenu = () => {
    setMenu(null);
    setMenuPreview(null);
  };

  const handleUploadMenu = () => {
    // Logic to handle menu upload
    console.log("Uploading menu:", menu);

    // Call the onTiffinData function with the tiffin-specific data
    onTiffinData({
      menu: menu,
      menuPreview: menuPreview,
    });

    // Reset the menu state after upload if needed
    setMenu(null);
    setMenuPreview(null);
  };

  const handleSubmit = () => {
    // Call the onTiffinData function with the tiffin-specific data
    onTiffinData({
      isVegetarian: isVegetarian,
      isDeliveryAvailable: isDeliveryAvailable,
      // Include any other relevant data from TiffinVen component
    });
  };

  return (
    <>
      <hr />
      <h5>Vegetarian</h5>
      <MDBRadio
        name="veg"
        id="Veg"
        label="Yes"
        inline
        checked={isVegetarian === true}
        onChange={() => setIsVegetarian(true)}
      />
      <MDBRadio
        name="veg"
        id="NonVeg"
        label="No"
        inline
        checked={isVegetarian === false}
        onChange={() => setIsVegetarian(false)}
      />
      <hr />
      <h5>Delivery</h5>
      <MDBRadio
        name="delivery"
        id="delivery1"
        label="Yes"
        inline
        checked={isDeliveryAvailable === true}
        onChange={() => setIsDeliveryAvailable(true)}
      />
      <MDBRadio
        name="delivery"
        id="delivery2"
        label="No"
        inline
        checked={isDeliveryAvailable === false}
        onChange={() => setIsDeliveryAvailable(false)}
      />
      <span className="d-flex justify-content-center mt-4">
        <MDBBtn rounded style={{ marginRight: 10 }}>
          <label htmlFor="menuUpload" style={{ cursor: "pointer" }}>
            <MDBIcon fas icon="upload" style={{ marginRight: 5 }} />
            Upload Menu
            <input
              type="file"
              accept=".pdf, .docx, .jpg, .jpeg, .png"
              onChange={handleMenuUpload}
              style={{ display: "none" }}
              id="menuUpload"
            />
          </label>
        </MDBBtn>
        <MDBTooltip
          tag="span"
          placement="right"
          title="Upload the weekly menu with quantity, price, and delivery timings"
        >
          <MDBIcon fas icon="info-circle" />
        </MDBTooltip>
      </span>
      {menu && (
        <div>
          {menu.type.startsWith("image/") ? (
            <div>
              <img
                src={menuPreview}
                alt="Menu Preview"
                style={{ maxWidth: "100%" }}
              />
              <MDBIcon
                far
                icon="trash-alt"
                className="ml-2"
                style={{ cursor: "pointer" }}
                onClick={handleDeleteMenu}
              />
            </div>
          ) : (
            <div>
              <hr />
              <p>Uploaded Menu: {menu.name}</p>
              <MDBIcon
                far
                icon="trash-alt"
                className="ml-2"
                style={{ cursor: "pointer" }}
                onClick={handleDeleteMenu}
              />
            </div>
          )}
        </div>
      )}
      <div className="d-flex justify-content-center mt-4">
        <MDBBtn rounded onClick={handleSubmit}>
          Submit
        </MDBBtn>
      </div>
    </>
  );
};
TiffinVen.propTypes = {
  onTiffinData: PropTypes.func.isRequired, // Step 3: PropTypes validation for onTiffinData prop
};

export default TiffinVen;
