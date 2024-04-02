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
  MDBTypography,
  MDBCarouselCaption,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardFooter,
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

  const openOnGoogleMap = () => {
    const latitude = props.latitude;
    const longitude = props.longitude;
    const googleMapsUrl = `http://maps.google.com/maps?q=${latitude},${longitude}`;
    window.location.href = googleMapsUrl;
  }

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

      <MDBModal staticBackdrop open={showModal} setOpen={setShowModal} tabIndex='-1'>
        <MDBModalDialog centered size="xl">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                <MDBTypography tag="strong" className='display-6'>
                  {props.name}
                </MDBTypography>
              </MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <div className='d-flex flex-row flex-wrap'>
              {/* Carousel for images with top and left margin */}
              <div style={{ width: '50%', overflow: 'hidden', marginLeft: '20px', marginTop: '20px' }}>
                <MDBCarousel showControls>
                  <MDBCarouselItem itemId={1}>
                    <img src='https://lh3.googleusercontent.com/p/AF1QipMKZMIyCfElTi1SPJzqE8tzx-Sr7SFFOoMreluI=s1360-w1360-h1020' className='d-block w-100' alt='...' style={{ maxHeight: '400px', width: 'auto', objectFit: 'contain' }} />
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId={2}>
                    <img src='https://lh3.googleusercontent.com/p/AF1QipNCQO78fr0Uk3rYdzsx_eX1UK0gtTL6iJCLZ1VM=s1360-w1360-h1020' className='d-block w-100' alt='...' style={{ maxHeight: '400px', width: 'auto', objectFit: 'contain' }} />
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId={3}>
                    <img src='https://lh3.googleusercontent.com/p/AF1QipM-bVdWV2YunlRZgh1tKkvOZ5465zZwyIzB2cDZ=s1360-w1360-h1020' className='d-block w-100' alt='...' style={{ maxHeight: '400px', width: 'auto', objectFit: 'contain' }} />
                  </MDBCarouselItem>
                </MDBCarousel>
              </div>
              {/* Additional card next to the carousel */}
              <div style={{ width: '4ch0%', marginLeft: '20px', marginTop: '20px' }} className='flex-grow-1'>
                <MDBRow className='row-cols-1 row-cols-md-3 g-4 '>
                  <MDBCol>
                    <MDBCard className='h-100 '>
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                          This is a wider card
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen} className='display-6'>
                Write a Review
              </MDBBtn>
              <MDBBtn color='secondary' onClick={() => openOnGoogleMap()} className='display-6'>
                Get Directions
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

    </div>
  );
}
