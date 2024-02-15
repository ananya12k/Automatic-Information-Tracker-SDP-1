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

const NavBar = () => {
  const [openNavRight, setOpenNavRight] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light" fixed="true" className="py-4">
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
          data-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavRight(!openNavRight)}
        >
          <MDBIcon fas icon="bars" />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={openNavRight.toString()}>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  PG
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Girls PG</MDBDropdownItem>
                  <MDBDropdownItem link>Boys PG</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Hostel
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Girls Hostel</MDBDropdownItem>
                  <MDBDropdownItem link>Boys Hostel</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>Tiffin</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>Contact Us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>Help</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>Search</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBBtn rounded>
                <MDBNavbarLink>Login</MDBNavbarLink>
              </MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavBar;
