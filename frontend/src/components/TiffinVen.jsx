import { useState } from "react";
import {
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";

const TiffinVen = () => {
  const [menu, setMenu] = useState(null);
  const [menuPreview, setMenuPreview] = useState(null);

  const handleMenuUpload = (e) => {
    const selectedFile = e.target.files[0];
    setMenu(selectedFile);
    setMenuPreview(URL.createObjectURL(selectedFile)); // Create a preview URL for the file
  };

  const handleDeleteMenu = () => {
    setMenu(null);
    setMenuPreview(null);
  };

  const handleUploadMenu = () => {
    // Logic to handle menu upload
    console.log("Uploading menu:", menu);
    // Reset the menu state after upload if needed
    setMenu(null);
    setMenuPreview(null);
  };

  return (
    <>
      <hr />
      <h5>Vegetarian</h5>
      <MDBRadio name="veg" id="Veg" label="Yes" inline />
      <MDBRadio name="veg" id="NonVeg" label="No" inline />
      <hr />
      <h5>Delivery</h5>
      <MDBRadio name="delivery" id="delivery1" label="Yes" inline />
      <MDBRadio name="delivery" id="delivery2" label="No" inline />
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
          {/* Display file preview based on file type */}
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
      {/* Your existing content */}
    </>
  );
};

export default TiffinVen;
