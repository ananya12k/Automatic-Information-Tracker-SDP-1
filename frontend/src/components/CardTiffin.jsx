import React, { useState } from 'react';
import {
 MDBCard,
 MDBCardBody,
 MDBCardTitle,
 MDBCardText,
 MDBCardImage,
 MDBRow,
 MDBCol,
 MDBBtn,
 MDBIcon
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'; 

export default function CardTiffin(props) {
 const [isHovered, setIsHovered] = useState(false);
 const navigate = useNavigate(); 

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

 const handleMouseEnter = () => setIsHovered(true);
 const handleMouseLeave = () => setIsHovered(false);

 const cardStyle = {
    width: '50vw',
    borderRadius: '15px',
    boxShadow: isHovered ? '0 10px 20px rgba(0, 0, 0, 0.2)' : '0 4px 8px 0 rgba(0,0,0,0.2)',
    overflow: 'hidden',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
 };

 const handleCardClick = () => {
    navigate('/details', { state: { hostel: props } });
 };

 return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <MDBCard
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick} 
      >
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src={props.thumbnail} alt='Tiffin Thumbnail' className='card-image' fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle className='text-start fs-2'>{props.name}</MDBCardTitle>
              <MDBCardText className='text-start fs-4'>
                <div className="d-flex align-items-center">
                 <span className="me-2" style={{ fontSize: '1.2rem', color: '#6c757d' }}>Stars:</span>
                 {renderStars(props.rating)}
                </div>
              </MDBCardText>
              <MDBCardText className='text-start fs-4'>
                <MDBIcon icon='phone' className='me-2' />{props.phone}
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
 );
}
