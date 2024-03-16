import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";

const SignUp = ({ open, handleClose }) => {
  return (
    <>
      <MDBModal open={open ? true : false} onClose={handleClose} tabIndex="-1">
        <MDBModalDialog centered scrollable size="lg">
          <MDBModalContent className="p-5">
            <MDBIcon
              fas
              icon="times"
              className="ms-auto click-handler"
              size="lg"
              onClick={handleClose}
            />

            <MDBRow>
              <MDBCol md="6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3619/3619429.png"
                  height="42"
                  alt=""
                  loading="lazy"
                />
                <h3 className="mb-3">Sign Up</h3>

                <form>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput id="form3Example1" label="First name" />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput id="form3Example2" label="Last name" />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput
                    className="mb-4"
                    type="email"
                    id="form3Example3"
                    label="Email address"
                  />
                  <MDBInput
                    className="mb-4"
                    type="password"
                    id="form3Example4"
                    label="Password"
                  />

                  <MDBCheckbox
                    wrapperClass="d-flex justify-content-center mb-4"
                    id="form3Example5"
                    label="Subscribe to our newsletter"
                    defaultChecked
                  />

                  <MDBBtn type="submit" className="mb-4" block>
                    Sign in
                  </MDBBtn>

                  <div className="text-center">
                    <p>
                      a member? <a href="#!">Register</a>
                    </p>
                    <p>or sign up with:</p>

                    <MDBBtn floating color="secondary" className="mx-1">
                      <MDBIcon fab icon="facebook-f" />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className="mx-1">
                      <MDBIcon fab icon="google" />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className="mx-1">
                      <MDBIcon fab icon="twitter" />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className="mx-1">
                      <MDBIcon fab icon="github" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
              <MDBCol
                md="6"
                className="d-flex align-items-center justify-content-center"
              >
                <MDBCarousel
                  showControls
                  interval={6000}
                  className="mx-auto"
                  style={{ maxHeight: "250px)" }}
                >
                  {/* Add your carousel items here */}
                  <MDBCarouselItem itemId={1}>
                    <img
                      src="https://mdbootstrap.com/img/new/slides/041.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId={2}>
                    <img
                      src="https://mdbootstrap.com/img/new/slides/042.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </MDBCarouselItem>
                </MDBCarousel>
              </MDBCol>
            </MDBRow>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default SignUp;
