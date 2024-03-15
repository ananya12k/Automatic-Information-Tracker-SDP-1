import {
  MDBBtn,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/forgot-password/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <MDBContainer fluid style={{ backgroundColor: "wheat" }}>
      <MDBRow>
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
            <form onSubmit={handleSubmit}>
              <MDBInput
                className="mb-4"
                type="email"
                id="form2Example1"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBBtn type="submit" className="mb-4" block>
                Send Reset Link
              </MDBBtn>
            </form>
            {message && <p>{message}</p>}
          </div>
        </MDBCol>
        <MDBCol
          md="6"
          className="d-flex justify-content-center align-items-center vh-100"
        >
          <MDBCarousel
            showControls
            interval={6000}
            className="mx-auto"
            style={{ maxHeight: "250px" }}
          >
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

export default ForgotPassword;
