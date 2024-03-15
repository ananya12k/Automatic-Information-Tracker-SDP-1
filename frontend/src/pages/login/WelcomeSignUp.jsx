import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";

const WelcomeSignUp = () => {
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
              <h3 className="mb-3">Welcome!</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                rutrum congue leo eget malesuada. Nulla porttitor accumsan
                tincidunt. Maecenas sed diam eget risus varius blandit.
              </p>
              <MDBBtn color="primary" className="mb-2 w-100" href="/login">
                Continue with Email
              </MDBBtn>
              <MDBBtn color="warning" className="w-100">
                Continue with Google
              </MDBBtn>
            </div>
          </div>
        </MDBCol>

        {/* Right Column */}
        <MDBCol md="6" className="d-flex align-items-center">
          <MDBCarousel
            showControls
            interval={6000}
            className="h-100"
            style={{ marginTop: 300, height: "100%" }}
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

export default WelcomeSignUp;
