import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCarousel,
  MDBInput,
  MDBCheckbox,
  MDBCarouselItem,
  MDBContainer,
} from "mdb-react-ui-kit";

const EmailLogin = () => {
  return (
    <MDBContainer fluid style={{ backgroundColor: "wheat" }}>
      <MDBRow>
        {/* Left Column */}
        <MDBCol md="6">
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3619/3619429.png"
                height="42"
                alt=""
                loading="lazy"
              />
              <h3 className="mb-3">Login</h3>

              <form>
                <MDBInput
                  className="mb-4"
                  type="email"
                  id="form2Example1"
                  label="Email address"
                />
                <MDBInput
                  className="mb-4"
                  type="password"
                  id="form2Example2"
                  label="Password"
                />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCheckbox
                    id="form2Example3"
                    label="Remember me"
                    defaultChecked
                  />
                  <a href="/forgot" className="text-right">
                    Forgot password?
                  </a>
                </div>

                <MDBBtn type="submit" className="mb-4" block>
                  Log in
                </MDBBtn>

                <div className="text-center">
                  <p>
                    Not a member? <a href="/signup">Register</a>
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
            </div>
          </div>
        </MDBCol>

        {/* Right Column */}
        <MDBCol
          md="6"
          className="d-flex align-items-center justify-content-center"
        >
          <MDBCarousel
            showControls
            interval={6000}
            className="mx-auto"
            style={{ maxHeight: "250px)", width: "100%" }}
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
    </MDBContainer>
  );
};

export default EmailLogin;
