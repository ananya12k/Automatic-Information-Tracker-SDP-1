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
    MDBInputGroup
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBarServices = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    };
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
                            <MDBNavbarLink href="/">
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href="/pgs">
                                Pg
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        {/* <MDBNavbarItem>
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
                        </MDBNavbarItem> */}
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
                            <MDBInputGroup tag="form" className='d-flex w-100 '>
                                <input className='form-control' placeholder="Seach Anything.." aria-label="Search" type='Search' />
                                <MDBBtn>
                                    <MDBIcon fas icon='search' />
                                </MDBBtn>

                            </MDBInputGroup>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default NavBarServices;
