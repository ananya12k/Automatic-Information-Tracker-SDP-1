import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

import { useState } from "react";

const VendorNav = () => {
  const [openNavRight, setOpenNavRight] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light" fixed className="py-4">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3619/3619429.png"
              height="42"
              alt=""
              loading="lazy"
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavRight(!openNavRight)}
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>

          <MDBCollapse navbar>
            <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink aria-current="page" href="/contact">
                  Contact Us
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink aria-current="page" href="/help">
                  Help
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default VendorNav;
