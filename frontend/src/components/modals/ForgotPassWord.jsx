import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCarousel,
  MDBInput,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
const ForgotPassWord = ({ open, handleClose }) => {
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

export default ForgotPassWord;
