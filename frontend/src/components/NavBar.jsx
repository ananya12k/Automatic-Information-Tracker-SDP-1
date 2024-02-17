import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useState } from "react";
import LoginComp from "./modals/LoginComp";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpen = () => {
    setShowModal(true);
  };

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
                <MDBNavbarLink active aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link">
                    PG
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link href="/pggirls">
                      Girls PG
                    </MDBDropdownItem>
                    <MDBDropdownItem link href="/pgboys">
                      Boys PG
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link">
                    Hostel
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link href="/hostelgirls">
                      Girls Hostel
                    </MDBDropdownItem>
                    <MDBDropdownItem link href="/hostelboys">
                      Boys Hostel
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink aria-current="page" href="/tiffin">
                  Tiffin
                </MDBNavbarLink>
              </MDBNavbarItem>
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
              <MDBNavbarItem>
                <MDBNavbarLink>Search</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBBtn rounded onClick={handleOpen}>
                  <MDBNavbarLink>Login</MDBNavbarLink>
                </MDBBtn>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <LoginComp open={showModal} handleClose={handleClose} />
    </>
  );
};

export default NavBar;
