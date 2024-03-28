import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalFooter,
  MDBCarousel,
  MDBCarouselItem,
  MDBTypography
} from 'mdb-react-ui-kit';

import Backdrop from './Backdrop';

export default function Card(props) {
  const [hover, setHover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleOpen = () => setShowModal(!showModal);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = '';
    }
  }, [showModal]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<MDBIcon key={i} icon='star' className='text-warning' style={{ fontSize: '1.5rem' }} />);
      } else {
        stars.push(<MDBIcon key={i} icon='star' className='text-muted' style={{ fontSize: '1.5rem' }} />);
      }
    }
    return stars;
  };

  const cardStyle = {
    width: '45vw',
    height: '250px',
    borderRadius: '15px',
    boxShadow: hover ? '0 10px 20px rgba(0, 0, 0, 0.2)' : '0 4px 8px 0 rgba(0,0,0,0.2)',
    overflow: 'hidden',
    transform: hover ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
    transform: hover ? 'scale(1.05)' : 'scale(1)'
  };

  const textStyle = {
    color: hover ? '#000' : '#6c757d',
    transition: 'color 0.3s ease-in-out'
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
      <MDBCard
        style={cardStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setShowModal(true)}
      >
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage src={props.thumbnail} alt='Hostel Thumbnail' className='card-image placeholder-glow' fluid style={imageStyle} />
          </MDBCol>
          <MDBCol md='6'>
            <MDBCardBody onClick={toggleOpen}>
              <MDBCardTitle className='text-start fs-2 ' style={textStyle}>{props.name}</MDBCardTitle>
              <MDBCardText className='text-start fs-4' style={textStyle}>
                {renderStars(props.rating)}
              </MDBCardText>
              <MDBCardText className='text-start fs-4' style={textStyle}>
                <MDBIcon icon='phone' className='me-2' />{props.phone}
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>

      <Backdrop show={showModal} />

      <MDBModal open={showModal} setOpen={setShowModal} tabIndex='-1'>
        <MDBModalDialog centered size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                <MDBTypography tag="strong" className='display-6'>
                  {props.name}
                </MDBTypography>
              </MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            {/* later, change the height according to content */}
            <MDBModalBody style={{ height: "300px" }}>
              <MDBCarousel>
                {Array.isArray(props.images) && props.images.map((image, index) => (
                  <MDBCarouselItem key={index} itemId={index + 1}>
                    <img src={image} className='d-block w-100' alt={`Slide ${index + 1}`} />
                  </MDBCarouselItem>
                ))}
              </MDBCarousel>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen} className='display-6'>
                Write a Review
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
