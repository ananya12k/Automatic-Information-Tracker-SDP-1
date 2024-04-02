import React, { useState } from 'react';
import {
 MDBCardImage,
 MDBRow,
 MDBCol,
 MDBBtn,
 MDBIcon,
 MDBModal,
 MDBModalDialog,
 MDBModalContent,
 MDBModalHeader,
 MDBModalTitle,
 MDBModalFooter,
 MDBTypography,
 MDBListGroup,
 MDBListGroupItem,
 MDBCardFooter,
 MDBCarousel, MDBCarouselItem,
 MDBCard,
 MDBCardBody,
 MDBCardTitle,
 MDBCardSubTitle,
 MDBCardText,
 MDBCardLink,
 MDBCardHeader 
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'; 

import Backdrop from './Backdrop';
import ReviewModal from './ReviewModal';

export default function Card(props) {
 const [hover, setHover] = useState(false);
 const [showModal, setShowModal] = useState(false);
 const [showReviewModal, setShowReviewModal] = useState(false);

 const toggleOpen = () => setShowModal(!showModal);
 const toggleReviewModal = () => setShowReviewModal(!showReviewModal);

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

 const navigate = useNavigate();

 const openOnGoogleMap = () => {
    const latitude = props.latitude;
    const longitude = props.longitude;
    const googleMapsUrl = `http://maps.google.com/maps?q=${latitude},${longitude}`;
    window.location.href = googleMapsUrl;
 }

 const cardStyle = {
    width: '45vw',
    height: 'auto',
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
 const handleCardClick = () => {
  navigate('/details', { state: { hostel: props } }); // Pass hostel details as state
 };

 return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
      <MDBCard
        style={cardStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleCardClick}
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

      {/* <Backdrop show={showModal} /> */}

      

    </div>
 );
}

// <MDBModal staticBackdrop open={showModal} setOpen={setShowModal} tabIndex='-1' position="fixed">
//  <MDBModalDialog centered size='fullscreen'>
//     <MDBModalContent scrollable>
//       <MDBModalHeader>
//         <MDBModalTitle>
//           <MDBTypography tag="strong" className='display-6'>
//             {props.name}
//           </MDBTypography>
//         </MDBModalTitle>
//         <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
//       </MDBModalHeader>
//       <div className='d-flex flex-row flex-wrap justify-content-between' style={{ margin: '20px' }}>
//         <div style={{ width: '50%', overflow: 'hidden', marginRight: '20px' }}>
//           <MDBCarousel showControls fade>
//             <MDBCarouselItem itemId={1}>
//               <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='Hostel Image 1' />
//               {/* <MDBCarouselCaption>
//                 <h3 className="h3-responsive">Hostel Image 1</h3>
//                 <p>Description for image 1.</p>
//               </MDBCarouselCaption> */}
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId={2}>
//               <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='Hostel Image 2' />
//               {/* <MDBCarouselCaption>
//                 <h3 className="h3-responsive">Hostel Image 2</h3>
//                 <p>Description for image 2.</p>
//               </MDBCarouselCaption> */}
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId={3}>
//               <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='Hostel Image 3' />
//               {/* <MDBCarouselCaption>
//                 <h3 className="h3-responsive">Hostel Image 3</h3>
//                 <p>Description for image 3.</p>
//               </MDBCarouselCaption> */}
//             </MDBCarouselItem>
//           </MDBCarousel>
//         </div>
//         <div style={{ width: '50%', marginLeft: '20px' }} className='flex-grow-1'>
//           <MDBRow className='row-cols-1 row-cols-md-3 g-4 '>
//             <MDBCol>
//               <MDBCard className='h-100 '>
//                 <MDBCardHeader>
//                  <MDBCardTitle>Address</MDBCardTitle>
//                 </MDBCardHeader>
//                 <MDBCardBody>
//                  <MDBCardText>
//                     {props.address}
//                  </MDBCardText>
//                  <MDBBtn color='secondary' onClick={openOnGoogleMap} className='display-6'>
//                     Get Directions
//                  </MDBBtn>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           </MDBRow>
//         </div>
//       </div>
//       <MDBModalFooter>
//         <MDBBtn color='secondary' onClick={toggleReviewModal} className='display-6'>
//           Write a Review
//         </MDBBtn>
//       </MDBModalFooter>
//     </MDBModalContent>
//  </MDBModalDialog>
// </MDBModal>