import {
  MDBBtn,
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBInput,
  MDBRow,
  MDBContainer,
} from "mdb-react-ui-kit";
const ForgotPassword = () => {
  return (
    <>
      <MDBContainer fluid style={{ backgroundColor: "wheat" }}>
        <MDBRow>
          {/* Left Column */}
          <MDBCol
            md="6"
            className="d-flex justify-content-center align-items-center vh-100"
          >
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3619/3619429.png"
                height="42"
                alt=""
                loading="lazy"
              />
              <h3 className="mb-3">Forgot Password</h3>
              <form>
                <MDBInput
                  className="mb-4"
                  type="email"
                  id="form2Example1"
                  label="Email address"
                />
                <MDBBtn type="submit" className="mb-4" block>
                  Send Reset Link
                </MDBBtn>
              </form>
            </div>
          </MDBCol>
          {/* Right Column */}
          <MDBCol
            md="6"
            className="d-flex justify-content-center align-items-center vh-100 "
          >
            <MDBCarousel
              showControls
              interval={6000}
              className="mx-auto"
              style={{ maxHeight: "250px" }}
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
    </>
  );
};

export default ForgotPassword;
