import React, { useRef, useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBCardGroup,
  MDBCardBody,
  MDBIcon,
  MDBInput,
  MDBTextArea,
  MDBModal,
  MDBModalBody,
} from "mdb-react-ui-kit";
import emailjs from '@emailjs/browser';
import NavBar from "../components/NavBar";

const ContactPage = () => {
  const email = "abc@gmail.com";
  const phone = "1234567890";
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    emailjs.init('PIf59O31InOHLWuLC');
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_etj73ng', 'template_csaxdta', form.current)
      .then(() => {
        console.log('SUCCESS!');
        setEmailSent(true);
      },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
    <>
      <NavBar/>
      <div className="container py-5">
        <MDBCardGroup className="mb-5">
          <MDBCard className="text-center">
            <MDBCardBody className="d-flex flex-column justify-content-center align-items-center">
              <MDBCardTitle tag="h3" className="mb-4">Contact Information</MDBCardTitle>
              <MDBBtn color="primary" className="mb-3 w-50 rounded-pill shadow-sm">
                <MDBIcon fas icon="envelope" className="p-2" size="2x" />
                <span className="text-center text-lowercase" style={{ fontSize: "25px" }}>
                  {email}
                </span>
              </MDBBtn>
              <MDBBtn color="primary" className="w-50 rounded-pill shadow-sm">
                <MDBIcon fas icon="phone" className="p-2" size="2x" />
                <span className="text-center" style={{ fontSize: "25px" }}>
                  {phone}
                </span>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          {!emailSent ? (
            <MDBCard className="w-100 md:w-50" style={{ height: "auto" }}>
              <MDBCardBody>
                <MDBCardTitle tag="h3" className="text-center mb-4">
                  We'd love to hear from you!
                </MDBCardTitle>
                <form ref={form} id="form" className="text-center" style={{ width: "100%", margin: "0 auto" }} onSubmit={sendEmail}>
                  <h4 className="text-start">Full Name</h4>
                  <MDBInput
                    className="form-control mb-3"
                    type="text"
                    name="full_name"
                    placeholder="Recipient's Full Name"
                    required
                  />
                  <h4 className="text-start">Email</h4>
                  <MDBInput
                    className="form-control mb-3"
                    type="email"
                    name="user_email"
                    placeholder="Recipient's Email"
                    required
                  />
                  <h4 className="text-start">Message</h4>
                  <MDBTextArea
                    className="form-control mb-3"
                    type="text"
                    name="message"
                    placeholder="Recipient's Message"
                    required
                  />
                  <MDBBtn color="primary" size="lg" className="w-100 rounded-pill shadow-sm" type="submit">
                    Send Your Message
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCard>
          ) : (
            <MDBCard className="w-100 md:w-50" style={{ height: "auto" }}>
              <MDBCardBody>
                <MDBCardTitle tag="h3" className="text-center mb-4">
                  <MDBIcon fas icon="envelope" size='3x' />
                </MDBCardTitle>
                <p className="text-center fs-3" >Thanks For Submitting!!</p>
                <p className="text-center fs-4" >We have received your message and our team will contact you shortly</p>
              </MDBCardBody>
            </MDBCard>
          )}
        </MDBCardGroup>
      </div>
    </>
  );
};

export default ContactPage;
